# Generated by Django 4.2.4 on 2023-10-03 07:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chef',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=150)),
                ('chef_image', models.CharField(max_length=150)),
                ('rating', models.IntegerField(default=0)),
                ('category', models.CharField(default='', max_length=100)),
                ('chef_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.chef')),
            ],
        ),
    ]
