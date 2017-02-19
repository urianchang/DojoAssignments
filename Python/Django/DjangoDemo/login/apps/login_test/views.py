from django.shortcuts import render, HttpResponse
from .models import User

def index(request):
    User.userManager.login("speros@codingdojo.com", "Speros")
    return HttpResponse(User.userManager.login("speros@codingdojo.com", "Speros"))
