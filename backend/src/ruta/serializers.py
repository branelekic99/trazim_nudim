from rest_framework import serializers
from .models import Route


class RoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = ['naziv_rute', 'profil_vozaca', 'startingLocation',
                  'endLocation', 'cigarete_u_autu', 'dozvoljen_prtljak',
                  'datum_kreiranja', 'datum_i_vrijeme_polaska', 'completed', 'broj_slobodnih_mjesta']
