from django.shortcuts import render, redirect
from .models import User

# Create your views here.

# Render the login & registration page
def index(request):
    print "** LANDING PAGE **"
    if 'user_id' not in request.session:
        request.session['user_id'] = -1
        request.session['valid'] = True
    return render(request, 'loginRegister/index.html')

# When user attempts to log in
def login(request):
    print "** Log in requested **"
    return redirect('/')

# When user attempts to register
def register(request):
    print "** Registration requested **"
    status_info = User.userManager.register(**request.POST)
    request.session['valid'] = status_info['valid']
    if request.session['valid']:
        print "** Registration information is valid **"
        return redirect('/')
    else:
        print status_info['messages']
        return redirect('/')

# Render the success/welcome page
def welcome(request):
    print "** Welcome back, user! **"
    return render(request, 'loginRegister/success.html')

# When user logs out
def logout(request):
    print "** Logging out **"
    return redirect('/')
