from django.urls import path
from .views import RouteCreateView

urlpatterns = [
    path('route-create/',RouteCreateView.as_view()),
]