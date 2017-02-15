from django.conf.urls import url
from . import views

# MODELS - VIEWS - TEMPLATES


urlpatterns = [
    url(r'^$', views.index)
]
