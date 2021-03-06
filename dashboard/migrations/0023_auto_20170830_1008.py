# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-08-30 10:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0022_auto_20170830_0945'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SourceOfInnovation',
            new_name='SourceOfInspiration',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='typesOfInnovation',
            new_name='types_of_innovation',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='source_of_innovation',
        ),
        migrations.AddField(
            model_name='profile',
            name='source_of_inspiration',
            field=models.ManyToManyField(related_name='profile_sourceofinspiration', to='dashboard.SourceOfInspiration'),
        ),
    ]
