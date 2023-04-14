from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    return HttpResponse('헤이븐 주간 퀘스트 가이드')

# Create your views here.
