from django.urls import path, include
from rest_framework import routers
from .views import MapViewSet, MonsterViewSet

from . import views

app_name = 'haven'

router = routers.DefaultRouter()
router.register('maps', MapViewSet)
router.register('monsters', MonsterViewSet)

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
    path('maps/', map_list, name='map_list'),
    path('maps/<int:pk>/', map_detail, name='map_detail'),
    path('monters/', map_list, name='map_list'),
    path('monsters/<int:pk>/', map_detail, name='map_detail'),
]