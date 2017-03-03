from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Pizza(models.Model):
    mushrooms = models.CharField(max_length=255)
    onions = models.CharField(max_length=255)
    olives = models.CharField(max_length=255)
    zucchini = models.CharField(max_length=255)
    pepperoni = models.CharField(max_length=255)
