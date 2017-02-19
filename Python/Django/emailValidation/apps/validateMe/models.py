from __future__ import unicode_literals
from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class EmailManager(models.Manager):
    def register(self, **kwargs):
        print "Email manager activated"
        print "Validating Email..."
        status = {}
        submitted_email = kwargs['email'][0]
        if len(submitted_email) < 1:
            status.update({'valid': False, 'err_msg': "E-mail field cannot be empty!"})
        elif not EMAIL_REGEX.match(submitted_email):
            status.update({'valid': False, 'err_msg': "Invalid E-mail format!"})
        else:
            status.update({'valid': True})
        return status

class Email(models.Model):
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    emailManager = EmailManager()
