
from django.urls import path


from . import views

urlpatterns = [
    path('foods/', views.FoodAPIView.as_view(), name='food_main'),
    path('foods/<int:id>/', views.FoodItemAPIView.as_view(), name='food_item'),
    path('<int:id>/orders/', views.Order.as_view(), name='food_order'),
] 