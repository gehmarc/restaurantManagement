# Generated by Django 4.2.1 on 2023-07-15 16:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("restaurant", "0003_userorder"),
    ]

    operations = [
        migrations.RenameField(
            model_name="userorder",
            old_name="user_email",
            new_name="user",
        ),
        migrations.AddField(
            model_name="userorder",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True, default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="userorder",
            name="quantity",
            field=models.PositiveIntegerField(default=1),
        ),
        migrations.AddField(
            model_name="userorder",
            name="updated_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name="userorder",
            name="ordered_items",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="user_food_items",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
