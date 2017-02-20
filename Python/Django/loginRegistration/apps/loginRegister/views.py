from django.shortcuts import render, redirect
from .models import User

# Create your views here.

# Render the login & registration page
def index(request):
    print "** LANDING PAGE **"
    if 'user_id' not in request.session:
        request.session['user_id'] = -1
        request.session['showmsg'] = False
    return render(request, 'loginRegister/index.html')

# When user attempts to log in
def login(request):
    print "** Log in requested **"
    login_info = User.userManager.login(**request.POST)
    print login_info
    if login_info['valid']:
        print "** Login info is valid **"
        print login_info['user_id']
        return redirect('/success')
    else:
        print "** Something went wrong **"
        print login_info['messages']
        return redirect('/')

# When user attempts to register
def register(request):
    print "** Registration requested **"
    status_info = User.userManager.register(**request.POST)
    if status_info['valid']:
        print "** Registration information is valid **"
        User.userManager.create(first_name=status_info['fname'], last_name=status_info['lname'], email=status_info['email'], password=status_info['pw'])
    else:
        print "** Something went wrong **"
        print status_info['messages']
    request.session['showmsg'] = True
    request.session['msgList'] = status_info['messages']
    return redirect('/')

# Render the success/welcome page
def welcome(request):
    print "** Welcome back, user! **"
    return render(request, 'loginRegister/success.html')

# When user logs out
def logout(request):
    print "** Logging out **"
    return redirect('/')
