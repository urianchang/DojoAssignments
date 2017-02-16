from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^results$', views.showResults),
    url(r'^new_person$', views.new_user),
    url(r'^home$', views.goHome)
]
