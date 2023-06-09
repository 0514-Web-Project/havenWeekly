# Generated by Django 4.0.3 on 2023-05-08 15:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('haven', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='아이템 이름')),
                ('img', models.ImageField(blank=True, null=True, upload_to='', verbose_name='아이템 이미지')),
            ],
            options={
                'verbose_name': '아이템',
                'verbose_name_plural': '아이템',
                'ordering': ['name'],
            },
        ),
        migrations.AlterModelOptions(
            name='map',
            options={'ordering': ['name'], 'verbose_name': '맵', 'verbose_name_plural': '맵'},
        ),
        migrations.AlterModelOptions(
            name='monster',
            options={'ordering': ['name'], 'verbose_name': '몬스터', 'verbose_name_plural': '몬스터'},
        ),
        migrations.AlterField(
            model_name='map',
            name='name',
            field=models.CharField(max_length=50, verbose_name='맵 이름'),
        ),
        migrations.AlterField(
            model_name='monster',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='', verbose_name='몬스터 이미지'),
        ),
        migrations.AlterField(
            model_name='monster',
            name='level',
            field=models.IntegerField(verbose_name='몬스터 레벨'),
        ),
        migrations.AlterField(
            model_name='monster',
            name='name',
            field=models.CharField(max_length=50, verbose_name='몬스터 이름'),
        ),
        migrations.CreateModel(
            name='QuestDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quest_type', models.BooleanField(verbose_name='퀘스트 타입')),
                ('amount', models.IntegerField(verbose_name='요구량')),
                ('item', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='questdetail', to='haven.item')),
                ('monster', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='questdetail', to='haven.monster')),
            ],
            options={
                'verbose_name': '퀘스트 세부사항',
                'verbose_name_plural': '퀘스트 세부사항',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Quest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='퀘스트 이름')),
                ('goal', models.TextField(verbose_name='퀘스트 목표')),
                ('difficulty', models.IntegerField(verbose_name='난이도')),
                ('finish_map', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='quest_finish', to='haven.map')),
                ('process_map', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='quest_process', to='haven.map')),
                ('quest_detail', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='quest', to='haven.questdetail')),
                ('start_map', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='quest_start', to='haven.map')),
            ],
            options={
                'verbose_name': '퀘스트',
                'verbose_name_plural': '퀘스트',
                'ordering': ['name'],
            },
        ),
    ]
