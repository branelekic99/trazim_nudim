from django.urls import path
from .views import (FacebookLogin,
                    GoogleLogin,
                    ProfileGetView,
                    ProfileDetailView,
                    ProfileUpdateView,
                    ProfileDeleteView,)

urlpatterns = [
    path('login/fb/',FacebookLogin.as_view(),name='fb-login'),
    path('login/google/',GoogleLogin.as_view(),name='google-login'),
    path('profiles/',ProfileGetView.as_view(),name='profile'),
    path('get-profile/',ProfileDetailView.as_view(),name='profile-detial'),
    path('profile-update/<str:pk>/',ProfileUpdateView.as_view(),name='profile-update'),
    path('profile-delete/<str:pk>/',ProfileDeleteView.as_view(),name='profile-delete'),
]