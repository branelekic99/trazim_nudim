from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', TemplateView.as_view(template_name="home.html")),
    path('admin/', admin.site.urls),
    path('messages/', include('chat.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('accounts/', include('allauth.urls'), name='socialaccount_signup'),
    path('api/refresh',TokenRefreshView.as_view()),
    path('',include('user_profile.urls')),
    path('',include('ruta.urls')),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

