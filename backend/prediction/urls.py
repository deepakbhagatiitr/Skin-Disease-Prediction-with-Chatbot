from django.urls import path
from .views import predict_skin_disease  # Import the view function

urlpatterns = [
    path('api/predict/', predict_skin_disease, name='predict_skin_disease'),
]
