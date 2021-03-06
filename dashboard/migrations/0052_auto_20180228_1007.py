# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2018-02-28 10:07
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0051_project_creator_role'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectContributor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(default='pending', max_length=50, verbose_name='Status')),
                ('contributor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.Profile')),
            ],
        ),
        migrations.AlterField(
            model_name='project',
            name='picture',
            field=models.ImageField(upload_to='images/projects', verbose_name='Challenge picture'),
        ),
        migrations.AddField(
            model_name='projectcontributor',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.Project'),
        ),
        migrations.AddField(
            model_name='project',
            name='project_contributors',
            field=models.ManyToManyField(related_name='project_contributors', through='dashboard.ProjectContributor', to='dashboard.Profile'),
        ),
    ]
