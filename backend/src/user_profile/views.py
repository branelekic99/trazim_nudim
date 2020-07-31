from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from .serializers import ProfileSerializer
from rest_framework.generics import ListAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView
from rest_framework import permissions
from .permissions import IsUserOwnerOfRecord
from .models import Profile

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class ProfileGetView(ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.AllowAny,)
    
class ProfileDetailView(RetrieveAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,IsUserOwnerOfRecord,)

    def get_object(self):
        obj = Profile.objects.get(user=self.request.user)
        return obj
        
class ProfileUpdateView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = (permissions.IsAuthenticated,IsUserOwnerOfRecord,)
    permission_classes = (permissions.AllowAny,)

class ProfileDeleteView(DestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,IsUserOwnerOfRecord,)
      
class GetUserTest(RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = ProfileSerializer

    

# Create your views here.
