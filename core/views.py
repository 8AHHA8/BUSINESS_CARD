from django.shortcuts import render
from django.views.decorators.http import require_GET
from .models import Skill, Experience, Education, Project

@require_GET
def home(request):
    skills_tech = Skill.objects.filter(category='tech')
    skills_soft = Skill.objects.filter(category='soft')
    experiences = Experience.objects.all()
    educations = Education.objects.all()
    projects = Project.objects.all()

    context = {
        'skills_tech': skills_tech,
        'skills_soft': skills_soft,
        'experiences': experiences,
        'educations': educations,
        'projects': projects,
    }
    return render(request, 'core/home.html', context)