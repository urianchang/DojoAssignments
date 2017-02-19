from django.shortcuts import render, redirect
from .models import Email

# Create your views here.
# Render the landing page
def index(request):
    print "*** Landing page ***"
    if 'id' not in request.session:
        request.session['id'] = -1
        request.session['error'] = False
    return render(request, 'validateMe/index.html')

# Check email when form is submitted
def validate(request):
    print "*** BUTTON CLICKED ***"
    # Pass request.POST data as kwargs...
    status_info = Email.emailManager.register(**request.POST)
    print status_info
    if status_info['valid']:
        print "Valid E-mail"
        e = Email.emailManager.create(email=request.POST['email'])
        request.session['id'] = e.id
        return redirect('/success')
    else:
        print status_info['err_msg']
        request.session['error'] = True
        request.session['err_msg'] = status_info['err_msg']
        return redirect('/')

# Render the success page
def success(request):
    if request.session['id'] == -1:
        print "Nuh-uh. You can't see this page yet."
        return redirect('/')
    else:
        context = {
            'new': Email.emailManager.get(id=request.session['id']),
            'emails': Email.emailManager.all()
        }
        return render(request, 'validateMe/success.html', context)

# Delete an email from the database
def delete(request):
    Email.emailManager.get(id=request.POST['id']).delete()
    return redirect('/logout')

# Log the user out
def logout(request):
    request.session.pop('id')
    return redirect('/')
