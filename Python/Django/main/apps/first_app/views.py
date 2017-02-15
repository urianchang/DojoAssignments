from django.shortcuts import render, HttpResponse

# CONTROLLERS!

# Create your views here.
def index(request):
    print "*" * 100
    return render(request, "first_app/index.html")
    # Don't need to include "templates" in the URL because it is automatically included.
