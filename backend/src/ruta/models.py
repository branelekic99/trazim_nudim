from django.db import models
from user_profile.models import Profile
from django.contrib.postgres.fields import ArrayField


class Route(models.Model):
    route_name = models.CharField(max_length=30)
    driver_profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    startingLocation = ArrayField(models.CharField(
        max_length=20, blank=True, null=True), size=2,)
    endLocation = ArrayField(models.CharField(
        max_length=20, blank=True, null=True), size=2,)
    cigarette_allowed = models.BooleanField(blank=True)
    luggage_allowed = models.BooleanField(blank=True)
    create_at = models.DateField(auto_now_add=True)
    departure = models.DateTimeField()
    completed = models.BooleanField(default=False)
    empty_spots = models.IntegerField()

    def __str__(self):
        return self.route_name

    class Meta:
        db_table = "route"


class Request(models.Model):
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    note = models.TextField(blank=True)
    seats_number = models.IntegerField()
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return self.profil.user.username + " request"

    class Meta:
        db_table = "request"


class Rating(models.Model):
    request = models.ForeignKey(Request, on_delete=models.DO_NOTHING)
    note = models.TextField(blank=True)
    score = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.request

    class Meta:
        db_table = "rating"

# Create your models here.

