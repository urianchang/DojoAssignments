from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^farm$', views.farm),
    url(r'^cave$', views.cave),
    url(r'^casino$', views.casino),
    url(r'^house$', views.house)
]
