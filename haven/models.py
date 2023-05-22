from django.db import models
from django.utils.translation import gettext_lazy as _


class Monster(models.Model):
    name = models.CharField('몬스터 이름', max_length=50)
    level = models.IntegerField('몬스터 레벨')
    img = models.ImageField('몬스터 이미지', blank=True, null=True, upload_to='monsters')

    class Meta:
        verbose_name = '몬스터'
        verbose_name_plural = '몬스터'
        ordering = ['name']

    def __str__(self):
        return self.name


class Map(models.Model):
    name = models.CharField('맵 이름', max_length=50)
    monsters = models.ManyToManyField('Monster', blank=True, related_name='maps')

    class Meta:
        verbose_name = '맵'
        verbose_name_plural = '맵'
        ordering = ['name']

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField('아이템 이름', max_length=50)
    img = models.ImageField('아이템 이미지', blank=True, null=True, upload_to='items')

    class Meta:
        verbose_name = '아이템'
        verbose_name_plural = '아이템'
        ordering = ['name']

    def __str__(self):
        return self.name


class QuestDetail(models.Model):
    name = models.CharField('이름', max_length=50, null=True)
    monster = models.ForeignKey(Monster, on_delete=models.SET_NULL, null=True, related_name='questdetail')
    item = models.ForeignKey(Item, on_delete=models.SET_NULL, blank=True, null=True, related_name='questdetail')
    quest_type = models.BooleanField('수집 퀘스트')
    amount = models.IntegerField('요구량')

    class Meta:
        verbose_name = '퀘스트 세부사항'
        verbose_name_plural = '퀘스트 세부사항'
        ordering = ['id']

    def __str__(self):
        return self.name


class NPC(models.Model):
    name = models.CharField('NPC 이름', max_length=50)
    img = models.ImageField('NPC 이미지', blank=True, null=True, upload_to='npcs')

    class Meta:
        verbose_name = 'NPC'
        verbose_name_plural = 'NPC'
        ordering = ['name']

    def __str__(self):
        return self.name


class Quest(models.Model):
    class QuestType(models.IntegerChoices):
        SIMPLE = 0, _("단순 퀘스트")
        SUPPLY = 1, _("지원 퀘스트")
        FIX = 2, _("건물 수리 퀘스트")

    class QuestDiff(models.IntegerChoices):
        veasy = 1, _("매우 쉬움")
        easy = 2, _("쉬움")
        normal = 3, _("보통")
        hard = 4, _("어려움")
        vhard = 5, _("매우 어려움")

    name = models.CharField('퀘스트 이름', max_length=50)
    type = models.IntegerField('퀘스트 종류', choices=QuestType.choices, default=QuestType.SIMPLE)
    goal = models.TextField('퀘스트 목표')
    quest_detail = models.ForeignKey(QuestDetail, on_delete=models.SET_NULL, null=True, related_name='quest')
    difficulty = models.IntegerField('난이도', choices=QuestDiff.choices)
    start_npc = models.ForeignKey(NPC, default=None, on_delete=models.SET_NULL, blank=True, null=True, related_name='quest_start')
    start_map = models.ForeignKey(Map, on_delete=models.SET_NULL, blank=True, null=True, related_name='quest_start')
    process_map = models.ForeignKey(Map, on_delete=models.SET_NULL, null=True, related_name='quest_process')
    finish_npc = models.ForeignKey(NPC, default=None, on_delete=models.SET_NULL, blank=True, null=True, related_name='quest_finish')
    finish_map = models.ForeignKey(Map, on_delete=models.SET_NULL, blank=True, null=True, related_name='quest_finish')

    class Meta:
        verbose_name = '퀘스트'
        verbose_name_plural = '퀘스트'
        ordering = ['name']

    def __str__(self):
        return self.name
