from django.contrib import admin
from django.urls import path
from Profile.views import ProfileDetails,CreateProfileView

urlpatterns = [
    path('<int:pk>/', ProfileDetails.as_view(),name='ProfileDetail'),
    path('create/', CreateProfileView.as_view(),name='CreateProfile'),
]