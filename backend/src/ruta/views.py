from django.shortcuts import render
from .serializers import RoutetSerializer
from rest_framework.generics import CreateAPIView,ListAPIView
from .models import Route
from rest_framework import permissions

class RouteCreateView(ListAPIView):
    queryset = Route.objects.all()
    serializer_class = RoutetSerializer
    permission_classes = [permissions.AllowAny,]


# Create your views here.
