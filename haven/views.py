from django.shortcuts import render, get_object_or_404
from .models import Map, Monster


def index(request):
    map_list = Map.objects.order_by('name')
    context = {'map_list': map_list}
    return render(request, 'haven/map_list.html', context)


def detail(request, map_id):
    map = get_object_or_404(Map, pk=map_id)
    monsters = map.monsters.all()
    context = {'map': map, 'monsters': monsters}
    return render(request, 'haven/map_detail.html', context)