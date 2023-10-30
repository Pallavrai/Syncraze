from django.contrib import admin
from Profile.models import User,Follower

admin.site.register([User,Follower])
