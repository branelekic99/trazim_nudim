from rest_framework import serializers
from .models import Route, Request, Rating


class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = ['id','route_name','driver_profile','startingLocation','endLocation',
        'cigarette_allowed','luggage_allowed','create_at','departure','completed','empty_spots']

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ['route','profile','note','seats_number','accepted']


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['request','note','score']