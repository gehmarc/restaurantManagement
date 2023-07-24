from django.db import models
from django.utils.translation import gettext_lazy as _
from core.models import User
# Create your models here.

class Food(models.Model):
    name = models.CharField(_("the name of the food"), max_length=256, blank=False, null=False)
    price = models.IntegerField(_("price of the food"), null=False, blank=False)
    available = models.BooleanField(_("determines if the food is available or not"), default=False)
    description = models.CharField(_("Say whatever you want about the food"), max_length=500, blank=True, null=True)
    category = models.CharField(_("select category where food belongs"), max_length=100, blank=False, null=False)
    image = models.ImageField(_("image"), upload_to='image/')
    type = models.CharField(_("type of meal: food, drink, pasteries"), max_length=256, blank=False, null=False )

    def __str__(self):
        return self.name

class UserOrder(models.Model):
    ordered_items = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='user_food_items')
    user = models.ForeignKey('core.user',on_delete=models.CASCADE)
    total_price = models.IntegerField(_("total price of the food"), null=False, blank=True)
    quantity = models.PositiveIntegerField(default=1)
    status = models.CharField(_("if the bill has been paid or not"), null=False, blank=False, default=False, max_length=30)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user
    
    class Meta:
        ordering = ['-updated_at']

class Reservation(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(_('name of the person requesting reservation'), max_length=256, null=False, blank=False)
    count = models.IntegerField(_("number of persons you're setting reservation for"), null=False, blank=False)
    date = models.DateField(_("date in which the reservation is to be set"), null=True, blank=True)
    time = models.TimeField(_("time client will like to eat"), blank=False, null=False)
    status = models.CharField(_("status of the field"), blank=False, null=False)
    desc = models.CharField(_("anything else user will like to request"), blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['-created_at']