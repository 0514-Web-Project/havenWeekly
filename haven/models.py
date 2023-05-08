from django.db import models


class Monster(models.Model):
    name = models.CharField('몬스터 이름', max_length=50)
    level = models.IntegerField('몬스터 레벨')
    img = models.ImageField('몬스터 이미지', blank=True, null=True)

    class Meta:
        verbose_name = '몬스터'
        verbose_name_plural = '몬스터'
        ordering = ['name']

    def __str__(self):
        return self.name


class Map(models.Model):
    name = models.CharField('맵 이름', max_length=50)
    monsters = models.ManyToManyField('Monster', related_name='maps')

    class Meta:
        verbose_name = '맵'
        verbose_name_plural = '맵'
        ordering = ['name']

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField('아이템 이름', max_length=50)
    img = models.ImageField('아이템 이미지', blank=True, null=True)

    class Meta:
        verbose_name = '아이템'
        verbose_name_plural = '아이템'
        ordering = ['name']

    def __str__(self):
        return self.name


class QuestDetail(models.Model):
    monster = models.ForeignKey(Monster, on_delete=models.SET_NULL, null=True, related_name='questdetail')
    item = models.ForeignKey(Item, on_delete=models.SET_NULL, null=True, related_name='questdetail')
    quest_type = models.BooleanField('퀘스트 타입')
    amount = models.IntegerField('요구량')

    class Meta:
        verbose_name = '퀘스트 세부사항'
        verbose_name_plural = '퀘스트 세부사항'
        ordering = ['id']

    def __str__(self):
        return self.monster.name


class Quest(models.Model):
    name = models.CharField('퀘스트 이름', max_length=50)
    goal = models.TextField('퀘스트 목표')
    quest_detail = models.ForeignKey(QuestDetail, on_delete=models.SET_NULL, null=True, related_name='quest')
    difficulty = models.IntegerField('난이도')
    start_map = models.ForeignKey(Map, on_delete=models.SET_NULL, null=True, related_name='quest_start')
    process_map = models.ForeignKey(Map, on_delete=models.SET_NULL, null=True, related_name='quest_process')
    finish_map = models.ForeignKey(Map, on_delete=models.SET_NULL, null=True, related_name='quest_finish')

    class Meta:
        verbose_name = '퀘스트'
        verbose_name_plural = '퀘스트'
        ordering = ['name']

    def __str__(self):
        return self.name
