from django.shortcuts import render, get_object_or_404
from .serializers import MapSerializer, MonsterSerializer
from .models import Map, Monster
from rest_framework import viewsets, permissions

class MapViewSet(viewsets.ModelViewSet):
    queryset = Map.objects.all().order_by('name')
    serializer_class = MapSerializer
    permission_classes = [permissions.IsAuthenticated]

class MonsterViewSet(viewsets.ModelViewSet):
    queryset = Monster.objects.all().order_by('name')
    serializer_class = MonsterSerializer
    permission_classes = [permissions.IsAuthenticated]



def index(request):
    map_list = Map.objects.order_by('name')
    context = {'map_list': map_list}
    return render(request, 'haven/map_list.html', context)


def detail(request, map_id):
    map = get_object_or_404(Map, pk=map_id)
    monsters = map.monsters.all()
    context = {'map': map, 'monsters': monsters}
    return render(request, 'haven/map_detail.html', context)