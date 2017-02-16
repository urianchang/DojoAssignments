from django.shortcuts import render, redirect
import string
import random

# Create your views here.
def index(request):
    print "*"*50
    print "You made it"
    print "*"*50
    if 'cur_run' not in request.session:
        request.session['cur_run'] = 1
    return render(request, 'rand_word/index.html')

def generate(request):
    if request.method == 'POST':
        print "*"*50
        print request.POST
        print request.method
        print "*"*50
        request.session['cur_run'] += 1
        word_list = []
        for num in range(1, 15):
            word_list.append(random.choice(string.ascii_uppercase+string.digits))
        request.session['word'] = "".join(word_list)
        return redirect("/")
    else:
        print "Something else happened"
        return redirect("/")
