from django.urls import include, path
from rest_framework import routers
from .views import BookViewset, CommentViewset, UserViewset, ApiOpenLibra

router = routers.DefaultRouter()
router.register(r'book', BookViewset, basename='book')
router.register(r'comment', CommentViewset, basename='comment')
router.register(r'user', UserViewset, basename='user')

urlpatterns = [
    path('', include(router.urls)),
    path('open_libra', ApiOpenLibra.as_view(), name='open_libra')
]
