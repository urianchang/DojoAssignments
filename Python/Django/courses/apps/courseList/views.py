from django.shortcuts import render, redirect
from .models import Course

# Create your views here.
def index(request):
    print "*** WELCOME HOME ***"
    context = {
        'courses': Course.objects.all()
    }
    print context
    return render(request, 'courseList/index.html', context)

def addCourse(request):
    if request.method == 'POST':
        print "***** Submitting Course info *****"
        Course.objects.create(name=request.POST['name'], description=request.POST['description'])
    return redirect('/')

def delCourse(request, id):
    context = {
        'course': Course.objects.get(id=id)
    }
    return render(request, "courseList/destroy.html", context)

def deleteC(request):
    print "** DELETING **"
    Course.objects.get(id=request.POST['id']).delete()
    return redirect('/')
