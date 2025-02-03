from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render
# from .models import User
import json
from django.http import JsonResponse


# @api_view(['GET'])
# def hello_world(request):
#     return Response({'message': 'I love Nicholas Glen Hosman!'})


# arguments like character_id are passed through the url, not the post request!!!!!!!!!
# for arguments to be passed to request object, need to use params for axios get request
@api_view(['GET'])
def hello_world(request, character_id):
    responseOne = str(request.GET['test']) # this line or one below, both work
    # responseOne = str(request.GET.get('test'))
    # name = get_object_or_404(Character, pk=character_id)
    # return Response({'message':name.name_text})
    return Response({'message': responseOne })

@api_view(['POST'])
def userName(request):
    # response = str(request.body)
    response = json.loads(request.body.decode('utf-8'))
    return Response({'userName': response['userName'] })

# request.POST is only for form-encoded data. 
# If you are posting JSON, then you should use request.body instead.