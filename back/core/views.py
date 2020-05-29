from django.shortcuts import render
from rest_framework import viewsets, permissions, views,response
from .models import Book, Comment
from django.contrib.auth.models import User
from .serializer import BookSerializer, CommentSerializer, UserSerializer
import requests


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'put', 'patch', 'head', 'options', 'delete']


class BookViewset(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class CommentViewset(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class ApiOpenLibra(views.APIView):
    def get(self, request, *args, **kwargs):
        try:
            url = "https://www.etnassoft.com/api/v1/get/?book_author="+request.query_params['autor']
            payload = {}
            headers = {
                'Cookie': 'PHPSESSID=u3b25kp7ajmeik85re08cuc5u2'
            }
            response_open = requests.request("GET", url, headers=headers, data=payload)
            text = response_open.text.encode('utf8')

        except Exception as e:
            return response.Response({'status': 'No procesado'}, 202)

        return response.Response({'status': 'Procesado', 'response': text}, 200)
