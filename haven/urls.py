from django.urls import path, include
from rest_framework import routers
from .views import MapViewSet, MonsterViewSet, NPCViewSet, ItemViewSet, QuestViewSet, QuestDetailViewSet

from . import views

app_name = 'haven'

router = routers.DefaultRouter()
router.register('map', MapViewSet)
router.register('monster', MonsterViewSet)
router.register('npc', NPCViewSet)
router.register('item', ItemViewSet)
router.register('quest', QuestViewSet)
router.register('quest_detail', QuestDetailViewSet)

map_list = MapViewSet.as_view({
    'post': 'create',
    'get': 'list'
})

map_detail = MapViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('map/', map_list, name='map_list'),
    path('map/<int:pk>/', map_detail, name='map_detail'),
    path('monter/', map_list, name='map_list'),
    path('monster/<int:pk>/', map_detail, name='map_detail'),
    path('npc/', map_list, name='map_list'),
    path('npc/<int:pk>/', map_detail, name='map_detail'),
    path('item/', map_list, name='map_list'),
    path('item/<int:pk>/', map_detail, name='map_detail'),
    path('quest/', map_list, name='map_list'),
    path('quest/<int:pk>/', map_detail, name='map_detail'),
    path('quest_detail/', map_list, name='map_list'),
    path('quest_detail/<int:pk>/', map_detail, name='map_detail'),
]