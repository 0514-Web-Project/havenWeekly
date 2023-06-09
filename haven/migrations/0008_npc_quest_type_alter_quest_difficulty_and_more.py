# Generated by Django 4.0.3 on 2023-05-22 10:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('haven', '0007_alter_questdetail_item'),
    ]

    operations = [
        migrations.CreateModel(
            name='NPC',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='NPC 이름')),
                ('img', models.ImageField(blank=True, null=True, upload_to='npcs', verbose_name='NPC 이미지')),
            ],
            options={
                'verbose_name': 'NPC',
                'verbose_name_plural': 'NPC',
                'ordering': ['name'],
            },
        ),
        migrations.AddField(
            model_name='quest',
            name='type',
            field=models.IntegerField(choices=[(0, '단순 퀘스트'), (1, '지원 퀘스트'), (2, '건물 수리 퀘스트')], default=0, verbose_name='퀘스트 종류'),
        ),
        migrations.AlterField(
            model_name='quest',
            name='difficulty',
            field=models.IntegerField(choices=[(1, '매우 쉬움'), (2, '쉬움'), (3, '보통'), (4, '어려움'), (5, '매우 어려움')], verbose_name='난이도'),
        ),
        migrations.AddField(
            model_name='quest',
            name='finish_npc',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='quest_finish', to='haven.npc'),
        ),
        migrations.AddField(
            model_name='quest',
            name='start_npc',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='quest_start', to='haven.npc'),
        ),
    ]
