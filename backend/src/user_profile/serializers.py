from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    firstname = serializers.SerializerMethodField()
    lastname = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()
    profile_pic = serializers.SerializerMethodField()

    def get_profile_pic(self,obj):
        if obj.profile_pic:
            return obj.profile_pic.url
        return ""
    def get_firstname(self,obj):
        return str(obj.user.first_name)
    def get_lastname(self,obj):
        return str(obj.user.last_name)
    def get_email(self,obj):
        return str(obj.user.email)
    class Meta:
        model = Profile
        fields =["firstname","lastname","email","profile_pic","adresa",'broj_tell','goditste']


        