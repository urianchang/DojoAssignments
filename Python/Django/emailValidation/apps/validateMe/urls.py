from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process$', views.validate),
    url(r'^success$', views.success),
    url(r'^logout$', views.logout)
]
