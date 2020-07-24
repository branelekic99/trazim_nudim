from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from .serializers import ProfileSerializer
from rest_framework.generics import ListAPIView
from .models import Profile

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


class ProfileGetView(ListAPIView):
    queryset = Profile.objects.all()
    


# Create your views here.
