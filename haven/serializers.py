from rest_framework import serializers
from .models import Map, Monster, Item, Quest, QuestDetail, NPC


class MonsterSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=True)

    class Meta:
        model = Monster
        fields = ('id', 'name', 'level', 'img',)


class ItemSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=True)

    class Meta:
        model = Item
        fields = ('id', 'name', 'img',)


class NPCSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=True)

    class Meta:
        model = NPC
        fields = ('id', 'name', 'img',)


class MapSerializer(serializers.ModelSerializer):
    monsters = MonsterSerializer(many=True, allow_null=True)

    class Meta:
        model = Map
        fields = ('id', 'name', 'monsters',)


class QuestDetailSerializer(serializers.ModelSerializer):
    monster = MonsterSerializer(many=False)
    item = ItemSerializer(many=False)

    class Meta:
        model = QuestDetail
        fields = ('id', 'name', 'monster', 'item', 'quest_type', 'amount',)


class QuestSerializer(serializers.ModelSerializer):
    quest_detail = QuestDetailSerializer()
    start_npc = NPCSerializer()
    start_map = MapSerializer()
    recommended_map = MapSerializer()
    finish_npc = NPCSerializer()
    finish_map = MapSerializer()


    class Meta:
        model = Quest
        fields = ('id', 'name', 'type', 'goal', 'quest_detail', 'difficulty',
                  'start_npc', 'start_map', 'recommended_map', 'finish_npc', 'finish_map',)
