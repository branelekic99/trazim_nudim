from rest_framework import serializers
from .models import Ruta

class RoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ruta
        fields = ['naziv_rute','profil_vozaca','startingLocation',
                'endLocation','cigarete_u_autu','dozvoljen_prtljak',
                'datum_kreiranja','datum_i_vrijeme_polaska','completed','broj_slobodnih_mjesta']