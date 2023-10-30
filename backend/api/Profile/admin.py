from django.contrib import admin
from Profile.models import User,Follower

admin.site.register([User,Follower])
admin.site.site_header='Syncraze'
admin.site.site_title='Syncraze'
