from django.contrib import admin
from .models import Map, Monster

# Register your models here.


class MapAdmin(admin.ModelAdmin):
    search_fields = ['name']

admin.site.register(Map, MapAdmin)
