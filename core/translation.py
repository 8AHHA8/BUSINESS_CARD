from modeltranslation.translator import register, TranslationOptions
from .models import Skill, Experience, Education, Project

@register(Skill)
class SkillTranslationOptions(TranslationOptions):
    fields = ('name',)

@register(Experience)
class ExperienceTranslationOptions(TranslationOptions):
    fields = ('position', 'description')

@register(Education)
class EducationTranslationOptions(TranslationOptions):
    fields = ('institution', 'field_of_study', 'degree') # <-- DODANO 'institution'

@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('description', 'title') # <-- DODANO 'title'