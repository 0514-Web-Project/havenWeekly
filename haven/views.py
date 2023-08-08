from .serializers import MapSerializer, MonsterSerializer, ItemSerializer,\
    NPCSerializer, QuestDetailSerializer, QuestSerializer, CoordinateSerializer
from .models import Map, Monster, Item, NPC, Quest, QuestDetail, Coordinate
from rest_framework import viewsets, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json


@api_view(['POST'])
def process_selected_quests(request):
    selected_quests = request.data.get('quests')
    quest_obj = []
    for quest in selected_quests:
        quest_obj.append(Quest.objects.get(name=quest['name']))
    for quest in quest_obj:
        print(quest.name)
        for i in quest.recommended_map.all():
            print(i.id)

    return Response({'message': selected_quests})


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


class CoordinateViewSet(viewsets.ModelViewSet):
    queryset = Coordinate.objects.all().order_by('id')
    serializer_class = CoordinateSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]