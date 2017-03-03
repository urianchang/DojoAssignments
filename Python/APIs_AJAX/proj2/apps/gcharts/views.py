from django.shortcuts import render, redirect
from .models import Pizza

# Create your views here.
def index(request):
    print "** LANDING PAGE **"
    # newPizza = Pizza.objects.create(mushrooms="5", onions="10", olives="1", zucchini="3", pepperoni="1")
    # print "** PIZZA CREATED **"
    # context = {
    #     'pizza': Pizza.objects.get(id=newPizza.id),
    # }
    return render(request, 'gcharts/index.html')
