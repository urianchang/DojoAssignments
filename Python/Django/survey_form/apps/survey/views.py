from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if 'cur_run' not in request.session:
        request.session['cur_run'] = 0
    return render(request, 'survey/index.html')

def showResults(request):
    return render(request, 'survey/results.html')

def new_user(request):
    print "**** SENDING POST INFO ****"
    request.session['uname'] = request.POST['username']
    request.session['loc'] = request.POST['userlocation']
    request.session['lang'] = request.POST['userlanguage']
    request.session['comm'] = request.POST['commentbox']
    request.session['cur_run'] += 1
    return redirect('/results')

def goHome(request):
    return redirect('/')
