# Generated by Django 5.1.6 on 2025-02-26 03:33

import autoslug.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chicamagica',
            name='slug',
            field=autoslug.fields.AutoSlugField(editable=False, populate_from='nombre', unique=True),
        ),
    ]
