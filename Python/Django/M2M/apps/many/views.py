from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Interest

# Create your views here.

# Render the landing page
def index(request):
    print "** Landing page **"
    context = {
        "interests": User.uiManager.countUsers()
    }
    return render(request, 'many/index.html', context)

# When user submits user & interest
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

# Show all the users
def users(request):
    print "** Showing all the users **"
    context = {
        "users": User.uiManager.all()
    }
    return render(request, 'many/users.html', context)

# Show specific user page
def showuser(request, name):
    print "** Requesting to see user page **"
    result = User.uiManager.checkFor(name)
    if not result[0]:
        return redirect('/')
    else:
        context = {'user': result[1]}
        return render(request, 'many/userinterests.html', context)

# Delete specific interest from user
def deleteinterest(request):
    if request.method == 'GET':
        print "** Delete is POST-only"
        return redirect('/')
    return redirect(User.uiManager.removeInterest(**request.POST))

# Delete specific user
def deleteuser(request):
    if request.method == 'GET':
        print "** Delete is POST-only **"
        return redirect('/')
    User.uiManager.get(name=request.POST['name']).delete()
    return redirect('/users')
