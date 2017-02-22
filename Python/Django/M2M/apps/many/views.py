from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Interest

# Create your views here.
def index(request):
    print "** Landing page **"
    return render(request, 'many/index.html')

def process(request):
    print "** Submitting new info **"
    result = User.uiManager.addStuff(**request.POST)
    if result['valid']:
        print "** All looks good. **"
        for msg in result['msglist']:
            messages.success(request, msg)
    else:
        print "** UH-OH **"
        for msg in result['msglist']:
            messages.error(request, msg)
    return redirect('/')

def showusers(request):
    print "** Request to see all the users **"
    return redirect('/users')

def users(request):
    print "** Showing all the users **"
    context = {
        "users": User.uiManager.all()
    }
    return render(request, 'many/users.html', context)

def showuserinterests(request):
    user_id = request.POST["id"]
    context = {
        "user": User.uiManager.get(id=user_id)
    }
    print User.uiManager.get(id=user_id).user_interests.all
    return render(request, 'many/userinterests.html', context)
