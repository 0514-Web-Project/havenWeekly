# Generated by Django 4.0.3 on 2023-05-17 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('haven', '0005_alter_item_img_alter_monster_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='questdetail',
            name='name',
            field=models.CharField(max_length=50, null=True, verbose_name='이름'),
        ),
        migrations.AlterField(
            model_name='questdetail',
            name='quest_type',
            field=models.BooleanField(verbose_name='수집 퀘스트'),
        ),
    ]