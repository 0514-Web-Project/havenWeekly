from django.db import models


class Monster(models.Model):
    name = models.CharField(max_length=50)
    level = models.IntegerField()
    img = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.name


class Map(models.Model):
    name = models.CharField(max_length=50)
    monsters = models.ManyToManyField('Monster', related_name='maps')

    def __str__(self):
        return self.name
    