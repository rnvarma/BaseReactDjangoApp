from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Comment(models.Model):
    author = models.CharField(max_length=100, default="")
    text = models.TextField(default="")