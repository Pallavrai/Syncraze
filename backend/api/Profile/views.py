from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics
from Profile.models import User
from rest_framework.serializers import ListSerializer

class ProfileDetails(generics.GenericAPIView,mixins.RetrieveModelMixin,mixins.CreateModelMixin,
                     mixins.DestroyModelMixin,mixins.UpdateModelMixin):
    
    queryset=User.objects.all()
    lookup_field='pk'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    

