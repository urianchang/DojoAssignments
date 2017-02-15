from django.shortcuts import render, HttpResponse
from datetime import datetime

# Create your views here.
def index(request):
    context = {
        "curdate": datetime.strftime(datetime.now(), '%b %d, %Y'),
        "curtime": datetime.strftime(datetime.now(), '%I:%M:%S %p')
    }
    return render(request, 'timedisplay/index.html', context)
