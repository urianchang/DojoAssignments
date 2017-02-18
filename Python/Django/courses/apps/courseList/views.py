from django.shortcuts import render, redirect
from .models import Course, Description

# Create your views here.
def index(request):
    print "*** WELCOME HOME ***"
    context = {
        'courses': Course.objects.all(),
        'descriptions': Description.objects.all()
    }
    print context
    return render(request, 'courseList/index.html', context)

def addCourse(request):
    if request.method == 'POST':
        print "***** Submitting Course info *****"
        c = Course.objects.create(name=request.POST['name'])
        instance = Course.objects.get(id=c.id)
        Description.objects.create(course_id=instance, description=request.POST['description'])
    return redirect('/')

def delCourse(request, id):
    courseInst = Course.objects.get(id=id)
    context = {
        'course': courseInst,
        'description': Description.objects.get(course_id=courseInst)
    }
    return render(request, "courseList/destroy.html", context)

def deleteC(request):
    print "** DELETING **"
    Course.objects.get(id=request.POST['id']).delete()
    return redirect('/')

def seeComments(request, id):
    print "** GOING TO COMMENTS **"
    return render(request, 'courseList/comments.html')
