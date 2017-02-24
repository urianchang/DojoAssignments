from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^courses/addCourse$', views.addCourse),
    url(r'^destroy/(?P<id>\d+)$', views.delCourse),
    url(r'^bye$', views.deleteC),
    url(r'^comment/(?P<id>\d+)$', views.seeComments),
    url(r'^addcomment$', views.addComment)
]
