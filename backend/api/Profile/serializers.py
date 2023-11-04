from rest_framework import serializers
from Profile.models import UserProfile,Follower,Post
class ProfileDetailSerializer(serializers.ModelSerializer):
    followers = serializers.SerializerMethodField()
    following = serializers.SerializerMethodField()
    posts_count = serializers.SerializerMethodField()
    class Meta:
        model = UserProfile
        fields = ['id','username','email','bio','profile_picture','followers','following','posts_count']
    
    def get_followers(self, obj):
        return Follower.objects.filter(user=obj).count()
    
    def get_following(self, obj):
        return Follower.objects.filter(follower=obj).count()
    
    def get_posts_count(self,obj):
        return Post.objects.filter(user=obj).count()


class ProfileCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserProfile
        fields = ['username','email','password','bio','profile_picture']