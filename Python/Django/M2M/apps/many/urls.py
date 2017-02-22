from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process$', views.process),
    url(r'^users$', views.users),
    url(r'^users/(?P<name>\w+)$', views.showuser),
    url(r'^deleteinterest$', views.deleteinterest),
    url(r'^deleteuser$', views.deleteuser)
]
