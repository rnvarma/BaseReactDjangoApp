from django.conf.urls import url
from django.contrib import admin

from backend.views import *

urlpatterns = [
    url(r'^1/allcomments$', AllComments.as_view())
]