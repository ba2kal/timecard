from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url('^userInfo/create/$', views.userInfoCreate.as_view(), name = 'userInfoCreate'),
]
