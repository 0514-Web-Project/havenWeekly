from django.shortcuts import render, get_object_or_404
from .serializers import MapSerializer, MonsterSerializer
from .models import Map, Monster
from rest_framework import viewsets, permissions
from rest_framework.parsers import MultiPartParser, FormParser

class MapViewSet(viewsets.ModelViewSet):
    queryset = Map.objects.all().order_by('name')
    serializer_class = MapSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class MonsterViewSet(viewsets.ModelViewSet):
    queryset = Monster.objects.all().order_by('name')
    serializer_class = MonsterSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
