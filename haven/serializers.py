from rest_framework import serializers
from .models import Map, Monster


class MonsterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Monster
        fields = ('id', 'name', 'level', 'img',)


class MapSerializer(serializers.ModelSerializer):
    monsters = MonsterSerializer(many=True, allow_null=True)

    class Meta:
        model = Map
        fields = ('id', 'name', 'monsters', )
