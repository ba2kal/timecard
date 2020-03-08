from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from . import views

urlpatterns = [
    url('^userInfo/create/$', views.userInfoPost.as_view(), name = 'userInfoPost'),
    url('^userInfo/list/$', views.userInfoList.as_view(), name = 'userInfoList'),
]
