from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^register$', views.register),
    url(r'^secrets$', views.home, name='secrets_home'),
    url(r'^logout$', views.logout),
    url(r'^popular$', views.popular, name='most_popular'),
    url(r'^psst$', views.addSecret),
    url(r'^delete$', views.delSecret),
    url(r'^like/(?P<id>\d+)$', views.likeSecret),
    url(r'^.+$', views.any)
]
