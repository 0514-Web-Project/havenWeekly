# Generated by Django 4.0.3 on 2023-05-17 17:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('haven', '0006_questdetail_name_alter_questdetail_quest_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questdetail',
            name='item',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='questdetail', to='haven.item'),
        ),
    ]
