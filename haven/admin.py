from django.contrib import admin
from django.apps import apps
from django.utils.safestring import mark_safe
from .models import Map, Monster, Item, Quest, QuestDetail, NPC, Coordinate

# Register your models here.


class CoordinateAdmin(admin.ModelAdmin):
    list_display = ['id', 'x', 'y', 'size']


class MonsterAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'level', 'img']
    list_display_links = ['name']
    search_fields = ['name']

    def img_tag(self, monster):
        if monster.img:
            return mark_safe(f'<img src="{monster.img.url}" style="width:50px;" />')
        return None

class MapAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'coordinates']
    list_display_links = ['id', 'name']
    search_fields = ['name']



admin.site.register(Coordinate, CoordinateAdmin)
admin.site.register(Monster, MonsterAdmin)
admin.site.register(Map, MapAdmin)


@admin.register(Item, Quest, QuestDetail, NPC)
class MyAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_display_links = ['id', 'name']
    search_fields = ['name']
