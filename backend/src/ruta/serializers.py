from rest_framework import serializers
from .models import Route


class RoutetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = ['route_name','driver_profile','startingLocation','endLocation',
        'cigarette_allowed','luggage_allowed','create_at','departure','completed','empty_spots']
