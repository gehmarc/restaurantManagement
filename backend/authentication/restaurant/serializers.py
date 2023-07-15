from rest_framework import serializers
from .models import Food, UserOrder

class FoodSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField( required=False )
    class Meta:
        model = Food
        fields = '__all__'
        read_only_fields = ['id']

class FoodItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Food
        fields = '__all__'

    
class UserOrdererializer(serializers.ModelSerializer):

    class Meta:
        model = UserOrder
        fields = '__all__'
        depth=1

    