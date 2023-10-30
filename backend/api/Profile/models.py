from django.db import models
from django.contrib.auth.models import User as UserModel

class User(models.Model):
    user= models.ForeignKey(UserModel,on_delete=models.CASCADE)
    bio = models.TextField()
    profile_pic = models.CharField(max_length=50)

class API(models.Model):
    api_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField()
    url = models.URLField()
    auth_method = models.CharField(max_length=50)

class User_API(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    api = models.ForeignKey(API, on_delete=models.CASCADE)
    access_token = models.CharField(max_length=50)
    refresh_token = models.CharField(max_length=50)

    class Meta:
        indexes = [
            models.Index(fields=['user', 'api']),
        ]
        unique_together = ['user', 'api']

class Post(models.Model):
    post_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    type = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)

    class Meta:
        indexes = [
            models.Index(fields=['user', '-timestamp']),
            models.Index(fields=['-likes']),
            models.Index(fields=['-comments']),
        ]

class Follower(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='following')
    follower = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='followers')

    class Meta:
        indexes = [
            models.Index(fields=['user', 'follower']),
        ]
        unique_together = ['user', 'follower']

class Message(models.Model):
    message_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    api = models.ForeignKey(API, on_delete=models.CASCADE)
    content = models.TextField()
    source = models.CharField(max_length=50)
    timestamp = models.DateTimeField()

    class Meta:
        indexes = [
            models.Index(fields=['user', 'api', '-timestamp']),
        ]
