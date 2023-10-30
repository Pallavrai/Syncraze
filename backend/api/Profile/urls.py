from django.contrib import admin
from django.urls import path
from Profile.views import ProfileDetails

urlpatterns = [
    path('<int:pk>/', ProfileDetails.as_view(),name='ProfileDetail'),
]