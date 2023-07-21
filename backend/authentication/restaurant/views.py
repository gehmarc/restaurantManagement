from django.shortcuts import render
from rest_framework.views import Response, status, APIView
from .serializers import FoodSerializer, FoodItemSerializer, UserOrdererializer, ReservationSerializer
from .models import Food
from core.models import User
# Create your views here.

class FoodAPIView(APIView):
    def get(self, request):
        foods = Food.objects.all()
        serializers = FoodSerializer(foods, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    

    def post(self, request):
        serializers = FoodSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    
class FoodItemAPIView(APIView):
    def get(self, request, id, format=None):
        try:
            foodItem = Food.objects.get(id=id)
        except Food.DoesNotExist:
            return Response({"message": f"food with id {id} was not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = FoodItemSerializer(foodItem)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id, format=None):
        try:
            foodItem = Food.objects.get(id=id)
        except Food.DoesNotExist:
            return Response({"message": f"food with id {id} was not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = FoodItemSerializer(foodItem, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        try:
            foodItem = Food.objects.get(id=id)

        except Food.DoesNotExist:
            return Response({"message": f"food with id {id} was not found"}, status=status.HTTP_404_NOT_FOUND)
        
        foodItem.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class Order(APIView):
    def get(self, request, id):
        user_id = User.objects.filter(id=id).first()
        return Response("data", status=status.HTTP_200_OK)
    
    def post(self, request, id):
        user_id = User.objects.filter(id=id).first()
        # request.data['user'] = user_id.email
        serializers = UserOrdererializer(data=request.data)

        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class ReservationAPIView(APIView):
    def get(self, request):
        serializers = ReservationSerializer(many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializers = ReservationSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save()
        #     return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

