from django.shortcuts import render, redirect
from .models import User, Secret
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Count

# Create your views here.
# Render the login & registration page
def index(request):
    print "** LOGIN/REG PAGE **"
    if 'user_id' not in request.session:
        request.session['user_id'] = -1
    return render(request, 'secrets/index.html')

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
        return redirect('/secrets')
    else:
        print "** Something went wrong **"
        for msg in login_info['messages']:
            messages.warning(request, msg)
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
        for msg in status_info['messages']:
            messages.success(request, msg)
    else:
        print "** Something went wrong **"
        for msg in status_info['messages']:
            messages.error(request, msg)
    return redirect('/')

# Render the secrets home page
def home(request):
    if 'user_id' not in request.session or request.session['user_id'] == -1:
        print "Nuh-uh. You can't see this page yet."
        request.session['user_id'] = -1
        messages.warning(request, 'Please sign-in or register.')
        return redirect('/')
    else:
        print "** Welcome back, user! **"
        context = {
            'user': User.userManager.get(id=request.session['user_id']),
            'secrets': Secret.secretMan.all().order_by('-created_at')[0:5]
        }
        # print Secret.secretMan.all()[0].like.all()[0].first_name
        return render(request, 'secrets/home.html', context)

# When user posts a secret
def addSecret(request):
    if request.method == 'GET':
        print "** Secrets must be POST-ed **"
        return redirect(reverse('secrets_home'))
    user_id = request.session['user_id']
    Secret.secretMan.addSecret(user_id, request.POST)
    return redirect(reverse('secrets_home'))

# Render page with most popular secrets
def popular(request):
    if 'user_id' not in request.session or request.session['user_id'] == -1:
        print "No secrets for you, yet."
        request.session['user_id'] = -1
        messages.warning(request, 'Please sign-in or register.')
        return redirect('/')
    else:
        print "** most popular secrets **"
        context = {
            'user': User.userManager.get(id=request.session['user_id']),
            'secrets': Secret.secretMan.all().annotate(num_likes=Count('like')).order_by('-num_likes')
        }
        return render(request, 'secrets/popular.html', context)

# Like a secret
def likeSecret(request, id):
    print "** You liked secret number: ", id
    user_id = request.session['user_id']
    secret_id = id
    Secret.secretMan.likeSecret(user_id, secret_id)
    return redirect('/secrets')

# Delete a secret
def delSecret(request):
    if request.method == 'GET':
        print "Delete is POST-only"
        return redirect('/')
    Secret.secretMan.get(id=request.POST['secret_id']).delete()
    return redirect('/secrets')

# When user logs out
def logout(request):
    if request.method == "GET":
        print "Logging out should be a POST request"
        return redirect('/')
    print "** Logging out **"
    request.session.pop('user_id')
    return redirect('/')

# If user accesses a URL route that's not supported...
def any(request):
    return redirect('/')
