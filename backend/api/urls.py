from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/<int:character_id>', views.hello_world, name='hello_world'),
    path('userName', views.userName, name="userName")
]