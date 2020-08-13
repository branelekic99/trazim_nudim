from django.shortcuts import render
from .serializers import RoutetSerializer
from rest_framework.generics import CreateAPIView,ListAPIView
from .models import Route
from rest_framework import permissions

class RouteCreateView(CreateAPIView):
    queryset = Route.objects.all()
    serializer_class = RoutetSerializer
    permission_classes = [permissions.IsAuthenticated,]


# Create your views here.
