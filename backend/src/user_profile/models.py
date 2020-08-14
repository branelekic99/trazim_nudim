from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(
        blank=True, null=True, upload_to='profile_pics')
    adddress = models.CharField(max_length=100, blank=True)
    reg_date = models.DateField(auto_now_add=True)
    tel_number = models.CharField(max_length=30, blank=True)
    age = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = "Profile"

    def __str__(self):
        return self.user.username

def create_profile(sender, **kwargs):
    print("OVDE SAM")
    if kwargs['created']:
        user_profile = Profile.objects.create(user=kwargs['instance'])

post_save.connect(create_profile, sender=User)


# Create your models here.
