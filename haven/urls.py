from django.urls import path

from . import views

app_name = 'haven'

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:map_id>/', views.detail, name='detail'),
]