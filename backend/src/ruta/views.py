from django.shortcuts import render
from .serializers import RouteSerializer, RatingSerializer, RequestSerializer
from rest_framework.generics import CreateAPIView,ListAPIView,UpdateAPIView
from .models import Route, Request, Rating
from rest_framework import permissions


class RouteList(ListAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
    permission_classes = [permissions.AllowAny,]

class RequestList(ListAPIView):
    queryset = Request.objects.all()
    serializer_class = RatingSerializer


class RatingList(ListAPIView):
    queryset = Rating.objects.all()
    serializer_class = RequestSerializer


class RouteCreateView(CreateAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
    permission_classes = [permissions.IsAuthenticated,]

class RouteUpdateView(UpdateAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
    permission_classes = (permissions.AllowAny,)


# Create your views here.
