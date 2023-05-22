from django.shortcuts import render, get_object_or_404
from .serializers import MapSerializer, MonsterSerializer, ItemSerializer,\
    NPCSerializer, QuestDetailSerializer, QuestSerializer
from .models import Map, Monster, Item, NPC, Quest, QuestDetail
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


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('name')
    serializer_class = ItemSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class NPCViewSet(viewsets.ModelViewSet):
    queryset = NPC.objects.all().order_by('name')
    serializer_class = NPCSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class QuestDetailViewSet(viewsets.ModelViewSet):
    queryset = QuestDetail.objects.all().order_by('name')
    serializer_class = QuestDetailSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class QuestViewSet(viewsets.ModelViewSet):
    queryset = Quest.objects.all().order_by('name')
    serializer_class = QuestSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]