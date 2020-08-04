from django.db import models
from user_profile.models import Profile
from django.contrib.postgres.fields import ArrayField

class Ruta(models.Model):
    naziv_rute = models.CharField(max_length=30)
    profil_vozaca = models.ForeignKey(Profile, on_delete=models.CASCADE)
    startingLocation = ArrayField(ArrayField(models.CharField(max_length=20, blank=True, null=True), size=2,), size=2,)
    endLocation = ArrayField(ArrayField(models.CharField(max_length=20, blank=True, null=True), size=2), size=2,)
    cigarete_u_autu = models.BooleanField(blank=True)
    dozvoljen_prtljak = models.BooleanField(blank=True)
    datum_kreiranja = models.DateField(auto_now_add=True)
    datum_i_vrijeme_polaska = models.DateField()
    completed = models.BooleanField(default=False)
    broj_slobodnih_mjesta = models.IntegerField()

    def __str__(self):
        return self.naziv_rute

class Request(models.Model):
    ruta = models.ForeignKey(Ruta,on_delete=models.CASCADE)
    profil = models.ForeignKey(Profile,on_delete=models.CASCADE)
    tekst = models.TextField(blank=True)
    broj_mjesta = models.IntegerField()
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return self.profil.user.username + " request"


class Ocjena(models.Model):
    request = models.ForeignKey(Request,on_delete=models.DO_NOTHING)
    tekst = models.TextField(blank=True)
    ocjena = models.DecimalField(max_digits=5,decimal_places=2)

# Create your models here.
