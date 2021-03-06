from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from . import views

urlpatterns = [
    url('^userInfo/create/$', views.userInfoPost.as_view(), name = 'userInfoPost'),
    url('^userInfo/list/$', views.userInfoList.as_view(), name = 'userInfoList'),
    url('^workTime/list/$', views.timeCardList.as_view(), name = 'timeCardList'),
    url('^workTime/create/$', views.timeCardPost.as_view(), name = 'timeCardPost'),
    url('^workTime/delete/$', views.timeCardDelete.as_view(), name = 'timeCardDelete'),
]
