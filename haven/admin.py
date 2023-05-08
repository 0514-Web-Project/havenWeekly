from django.contrib import admin
from .models import Map, Monster, Item, QuestDetail, Quest

# Register your models here.


@admin.register(Map, Monster, Item, Quest, QuestDetail)
class MyAdmin(admin.ModelAdmin):
    search_fields = ['name']

