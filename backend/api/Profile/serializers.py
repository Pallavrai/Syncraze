from rest_framework import serializers
from Profile.models import User
class ProfileDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'