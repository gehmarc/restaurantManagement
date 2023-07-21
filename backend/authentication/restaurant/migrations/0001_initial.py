# Generated by Django 4.2.1 on 2023-07-20 20:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Food",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        max_length=256, verbose_name="the name of the food"
                    ),
                ),
                ("price", models.IntegerField(verbose_name="price of the food")),
                (
                    "available",
                    models.BooleanField(
                        default=False,
                        verbose_name="determines if the food is available or not",
                    ),
                ),
                (
                    "description",
                    models.CharField(
                        blank=True,
                        max_length=500,
                        null=True,
                        verbose_name="Say whatever you want about the food",
                    ),
                ),
                (
                    "category",
                    models.CharField(
                        max_length=100,
                        verbose_name="select category where food belongs",
                    ),
                ),
                ("image", models.ImageField(upload_to="image/", verbose_name="image")),
            ],
        ),
        migrations.CreateModel(
            name="Reservation",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        max_length=256,
                        verbose_name="name of the person requesting reservation",
                    ),
                ),
                (
                    "count",
                    models.IntegerField(
                        verbose_name="number of persons you're setting reservation for"
                    ),
                ),
                (
                    "date",
                    models.DateField(
                        blank=True,
                        null=True,
                        verbose_name="date in which the reservation is to be set",
                    ),
                ),
                ("time", models.TimeField(verbose_name="time client will like to eat")),
                ("status", models.CharField(verbose_name="status of the field")),
                (
                    "desc",
                    models.CharField(
                        blank=True,
                        null=True,
                        verbose_name="anything else user will like to request",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "ordering": ["-created_at"],
            },
        ),
        migrations.CreateModel(
            name="UserOrder",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "total_price",
                    models.IntegerField(
                        blank=True, verbose_name="total price of the food"
                    ),
                ),
                ("quantity", models.PositiveIntegerField(default=1)),
                (
                    "status",
                    models.CharField(
                        default=False,
                        max_length=30,
                        verbose_name="if the bill has been paid or not",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "ordered_items",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_food_items",
                        to="restaurant.food",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "ordering": ["-updated_at"],
            },
        ),
    ]
