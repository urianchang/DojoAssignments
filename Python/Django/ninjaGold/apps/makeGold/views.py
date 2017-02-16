from django.shortcuts import render, redirect
import time
import random

# Helper function that generates random numbers
def genRandInt(start, end):
    x = random.randrange(start, end+1)
    return x

# Create your views here.
def index(request):
    if "cur_gold" not in request.session:
        request.session["cur_gold"] = 0
        request.session['log'] = "Let's make it rain!\n"
    return render(request, 'makeGold/index.html')

def farm(request):
    localtime = time.asctime( time.localtime(time.time()) )
    addgold = genRandInt(10, 20)
    request.session['cur_gold'] += addgold
    request.session['log'] += "Earned " + str(addgold) + " dubloons from the farm! "
    request.session['log'] += str(localtime) + "\n"
    return redirect('/')

def cave(request):
    localtime = time.asctime( time.localtime(time.time()) )
    addgold = genRandInt(5, 10)
    request.session['cur_gold'] += addgold
    request.session['log'] += "Earned " + str(addgold) + " dubloons from the cave! "
    request.session['log'] += str(localtime) + "\n"
    return redirect('/')

def house(request):
    localtime = time.asctime( time.localtime(time.time()) )
    addgold = genRandInt(2, 5)
    request.session['cur_gold'] += addgold
    request.session['log'] += "Earned " + str(addgold) + " dubloons from the house! "
    request.session['log'] += str(localtime) + "\n"
    return redirect('/')

def casino(request):
    localtime = time.asctime( time.localtime(time.time()) )
    addgold = genRandInt(0, 50)
    chance = genRandInt(0, 1)
    if chance == 0:
        addgold = -addgold
        request.session['log'] += "Entered a casino and lost " + str(abs(addgold)) + " dubloons...ouch! "
        request.session['cur_gold'] += addgold
    else:
        request.session['cur_gold'] += addgold
        request.session['log'] += "Earned " + str(addgold) + " dubloons from the casino! "
    request.session['log'] += str(localtime) + "\n"
    return redirect('/')
