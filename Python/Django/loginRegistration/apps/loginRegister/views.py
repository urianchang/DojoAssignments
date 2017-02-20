from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import re

msg_success_regex = re.compile(r'^Thank')

# Create your views here.

# Render the login & registration page
def index(request):
    print "** LANDING PAGE **"
    if 'user_id' not in request.session:
        request.session['user_id'] = -1
        request.session['showmsg'] = False
    if request.session['showmsg']:
        if request.session['loginerrors']:
            for msg in request.session['loginerrors']:
                messages.warning(request, msg)
        if request.session['regerrors']:
            for msg in request.session['regerrors']:
                if msg_success_regex.match(msg):
                    messages.success(request, msg)
                else:
                    messages.error(request, msg)
    return render(request, 'loginRegister/index.html')

# When user attempts to log in
def login(request):
    print "** Log in requested **"
    login_info = User.userManager.login(**request.POST)
    if login_info['valid']:
        print "** Login info is valid **"
        request.session['user_id'] = login_info['user_id']
        request.session['showmsg'] = False
        return redirect('/success')
    else:
        print "** Something went wrong **"
        request.session['showmsg'] = True
        request.session['regerrors'] = []
        request.session['loginerrors'] = login_info['messages']
        return redirect('/')

# When user attempts to register
def register(request):
    print "** Registration requested **"
    status_info = User.userManager.register(**request.POST)
    if status_info['valid']:
        print "** Registration information is valid **"
        # User.userManager.create(first_name=status_info['fname'], last_name=status_info['lname'], email=status_info['email'], password=status_info['pw'], birthday=status_info['bday'])
    else:
        print "** Something went wrong **"
        print status_info['messages']
    request.session['showmsg'] = True
    request.session['loginerrors'] = []
    request.session['regerrors'] = status_info['messages']
    return redirect('/')

# Render the success/welcome page
def welcome(request):
    if request.session['user_id'] == -1:
        print "Nuh-uh. You can't see this page yet."
        return redirect('/')
    else:
        print "** Welcome back, user! **"
        context = {
            'user': User.userManager.get(id=request.session['user_id']),
            'users': User.userManager.all()
        }
        return render(request, 'loginRegister/success.html', context)

# When user logs out
def logout(request):
    print "** Logging out **"
    request.session.pop('user_id')
    return redirect('/')

# Delete a user
def delete(request):
    User.userManager.get(id=request.POST['id']).delete()
    return redirect('/success')
