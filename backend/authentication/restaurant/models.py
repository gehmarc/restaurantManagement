from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Food(models.Model):
    # id = models.IntegerField(_("id of the food"), unique=True, primary_key=True, blank=False, null=False)
    name = models.CharField(_("the name of the food"), max_length=256, blank=False, null=False)
    price = models.IntegerField(_("price of the food"), null=False, blank=False)
    available = models.BooleanField(_("determines if the food is available or not"), default=False)
    description = models.CharField(_("Say whatever you want about the food"), max_length=500, blank=True, null=True)
    category = models.CharField(_("select category where food belongs"), max_length=100, blank=False, null=False)
    image = models.ImageField(_("image"), upload_to='image/')

    def __str__(self):
        return self.name

class UserOrder(models.Model):
    ordered_items = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='user_food_items')
    user = models.ForeignKey('core.user',on_delete=models.CASCADE)
    total_price = models.IntegerField(_("total price of the food"), null=False, blank=True)
    quantity = models.PositiveIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.quantity


