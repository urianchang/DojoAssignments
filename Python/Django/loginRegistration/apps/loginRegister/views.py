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
    if request.method == 'GET':
        print "** Login is POST-only **"
        return redirect('/')
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
    if request.method == 'GET':
        print "** Registration is POST-only **"
        return redirect('/')
    print "** Registration requested **"
    status_info = User.userManager.register(**request.POST)
    if status_info['valid']:
        print "** Registration information is valid **"
    else:
        print "** Something went wrong **"
        print status_info['messages']
    request.session['showmsg'] = True
    request.session['loginerrors'] = []
    request.session['regerrors'] = status_info['messages']
    return redirect('/')

# Render the success/welcome page
def welcome(request):
    if 'user_id' not in request.session:
        print "Nuh-uh. You can't see this page yet."
        return redirect('/')
    elif request.session['user_id'] == -1:
        print "** Need to sign-in or register **"
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
    if request.method == "GET":
        print "Logging out should be a POST request"
        return redirect('/')
    print "** Logging out **"
    request.session.pop('user_id')
    return redirect('/')

# Delete a user
def delete(request):
    if request.method == 'GET':
        print "Delete is POST-only"
        return redirect('/')
    User.userManager.get(id=request.POST['id']).delete()
    return redirect('/success')
