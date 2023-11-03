from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics
from Profile.models import UserProfile
from Profile.serializers import ProfileDetailSerializer,ProfileCreateSerializer


class ProfileDetails(generics.GenericAPIView,mixins.RetrieveModelMixin,
                     mixins.DestroyModelMixin,mixins.UpdateModelMixin):
    
    queryset=UserProfile.objects.all()
    serializer_class=ProfileDetailSerializer
    
    lookup_field='pk'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    

class CreateProfileView(generics.GenericAPIView,mixins.CreateModelMixin):
    queryset=UserProfile.objects.all()
    serializer_class = ProfileCreateSerializer
    def post(self,request,*args,**kwargs):
        return self.create(request,*args,**kwargs)
    

