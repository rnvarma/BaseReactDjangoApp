from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponseRedirect
from django.http import JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from backend.models import *

class AllComments(APIView):
    def get(self, request):
        comments = map(lambda c: {"id": c.id, "text": c.text, "author": c.author}, Comment.objects.all())
        return Response(comments)

    def post(self, request):
        author = request.POST.get('author')
        text = request.POST.get('text')
        new_comment = Comment(author=author, text=text)
        new_comment.save()
        comments = map(lambda c: {"id": c.id, "text": c.text, "author": c.author}, Comment.objects.all())
        return Response(comments)