from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'ninjas/index.html')

def showAll(request):
    context = {
        'ninja_name': 'all'
    }
    return render(request, 'ninjas/ninja.html', context)

def ninja(request, color):
    context = {
        'ninja_name': color
    }
    return render(request, "ninjas/ninja.html", context)
