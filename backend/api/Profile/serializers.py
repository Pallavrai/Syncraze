from rest_framework import serializers
from Profile.models import UserProfile
class ProfileDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id','username','email','bio','profile_picture']

class ProfileCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['username','email','password','bio','profile_picture']