from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

class Profile(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    profile_pic = models.ImageField(blank=True, null=True,upload_to='profile_pics')
    adresa = models.CharField(max_length=100,blank=True)
    datum_reg = models.DateField(auto_now_add=True)
    broj_tell = models.CharField(max_length=30,blank=True)
    goditste = models.IntegerField(blank=True,null=True)

    def __str__(self):
        return self.user.username

def create_profile(sender,**kwargs):
    print(kwargs)
    if kwargs['created']:
        Profile.objects.create(user=kwargs['instance'])

post_save.connect(create_profile,sender=User)


# Create your models here.
