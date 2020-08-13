from django.shortcuts import render
from .serializers import RouteSerializer, RatingSerializer, RequestSerializer, RoutetSerializer
from rest_framework.generics import CreateAPIView,ListAPIView
from .models import Route, Request, Rating
from rest_framework import permissions
from django.views.generic import ListView


class RouteList(ListView):
    model = Route
    serializer_class = RouteSerializer


class RequestList(ListView):
    model = Request
    serializer_class = RatingSerializer


class RatingList(ListView):
    model = Rating
    serializer_class = RequestSerializer


class RouteCreateView(ListAPIView):
    queryset = Route.objects.all()
    serializer_class = RoutetSerializer
    permission_classes = [permissions.AllowAny,]


# Create your views here.
