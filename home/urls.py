from django.conf.urls import url
from django.contrib import admin

from home.views import *

urlpatterns = [
    url(r'^$', HomePage.as_view())
]