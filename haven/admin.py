from django.contrib import admin
from django.apps import apps
from django.utils.safestring import mark_safe
from .models import Map, Monster, Item, Quest, QuestDetail, NPC

# Register your models here.


class MonsterAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'level', 'img']
    list_display_links = ['name']
    search_fields = ['name']

    def img_tag(self, monster):
        if monster.img:
            return mark_safe(f'<img src="{monster.img.url}" style="width:50px;" />')
        return None


admin.site.register(Monster, MonsterAdmin)


@admin.register(Map, Item, Quest, QuestDetail, NPC)
class MyAdmin(admin.ModelAdmin):
    search_fields = ['name']

