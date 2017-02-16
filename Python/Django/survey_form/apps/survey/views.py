from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'survey/index.html')

def showResults(request):
    return render(request, 'survey/results.html')

def new_user(request):
    print "**** SENDING POST INFO ****"
    return redirect('/results')
