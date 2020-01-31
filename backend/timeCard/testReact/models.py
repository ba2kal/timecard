from django.db import models

# Create your models here.

class Test(models.Model):
    id = models.CharField(max_length=10).primary_key
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=20)

    def __str__(self):
        return self