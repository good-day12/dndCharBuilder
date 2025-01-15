from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render
from .models import Character


@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'I love Nicholas Glen Hosman!'})


# arguments like character_id are passed through the url, not the post request!!!!!!!!!
@api_view(['POST'])
def hello_world(request, character_id):
    name = get_object_or_404(Character, pk=character_id)
    return Response({'message':name.name_text})