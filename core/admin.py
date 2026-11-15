from django.contrib import admin
from .models import Skill, Experience, Education, Project, ContactMessage

admin.site.register(Skill)
admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(Project)
admin.site.register(ContactMessage)