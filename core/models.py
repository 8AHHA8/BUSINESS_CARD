from django.db import models

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('tech', 'Techniczne'),
        ('soft', 'Miękkie'),
    ]
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES, default='tech')
    order = models.IntegerField(default=0, help_text="Kolejność wyświetlania")

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']


class Experience(models.Model):
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True, help_text="Zostaw puste, jeśli to obecna praca")
    description = models.TextField(help_text="Opis obowiązków (jeden punkt na linię)")

    def __str__(self):
        return f"{self.position} @ {self.company}"

    class Meta:
        ordering = ['-start_date']


class Education(models.Model):
    institution = models.CharField(max_length=200)
    field_of_study = models.CharField(max_length=200)
    degree = models.CharField(max_length=100, help_text="np. Inżynier, Magister")
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.degree} - {self.institution}"

    class Meta:
        ordering = ['-start_date']


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=300, help_text="Oddziel przecinkami, np. Python, OpenCV, LSTM")
    github_link = models.URLField(blank=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    
    # Pole do ręcznego sortowania
    order = models.IntegerField(default=0, help_text="Kolejność wyświetlania (im mniejsza, tym wyżej)")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order'] # Sortowanie po 'order'


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Wiadomość od {self.name} ({self.created_at.strftime('%Y-%m-%d')})"