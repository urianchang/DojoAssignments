from __future__ import unicode_literals
from django.db import models
import bcrypt
import re
import time

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    # Login checks and functions
    def login(self, **kwargs):
        print "** User manager activated **"
        print "** Checking login info **"
        status = {}
        messages = []
        email = kwargs['mail'][0]
        password = kwargs['password'][0]
        print email, password
        if len(email) < 1 or len(password) < 1:
            messages.append("Login fields cannot be blank.")
        else:
            userinfo = User.userManager.filter(email=email)
            if not userinfo:
                messages.append("Unable to find user. Please register.")
            elif not bcrypt.checkpw(password.encode(), userinfo[0].password.encode()):
                messages.append("Incorrect password.")
        if not messages:
            valid = True
            status.update({'user_id': userinfo[0].id})
        else:
            valid = False
            status.update({'messages': messages})
        status.update({'valid': valid})
        return status
    # Register checks and functions
    def register(self, **kwargs):
        print "** User manager activated **"
        print "** Checking registration form **"
        status = {}
        messages = []
        fname = kwargs['first_name'][0]
        lname = kwargs['last_name'][0]
        email = kwargs['mail'][0]
        pword = kwargs['pword'][0]
        cpword = kwargs['c-pword'][0]
        if len(fname) < 1:
            messages.append('First name is required.')
        elif len(fname) < 2:
            messages.append('First name has to be at least 2 characters.')
        elif not NAME_REGEX.match(fname):
            messages.append('First name can only contain letters.')
        if len(lname) < 1:
            messages.append('Last name is required.')
        elif len(lname) < 2:
            messages.append('Last name has to be at least 2 characters.')
        elif not NAME_REGEX.match(lname):
            messages.append('Last name can only contain letters.')
        if len(email) < 1:
            messages.append('E-mail is required.')
        elif not EMAIL_REGEX.match(email):
            messages.append('Invalid e-mail format.')
        elif len(User.userManager.filter(email=email)) > 0:
            messages.append('User already exists.')
        if len(pword) < 1:
            messages.append('Password is required.')
        elif len(pword) < 8:
            messages.append('Password should be at least 8 characters.')
        elif pword != cpword:
            messages.append('Password fields do not match.')
        if not messages:
            valid = True
            messages.append('Thank you for registering! Please sign in.')
            pw_hash = bcrypt.hashpw(pword.encode(), bcrypt.gensalt())
            User.userManager.create(first_name = fname, last_name = lname, email = email, password = pw_hash)
        else:
            valid = False
        status.update({'valid': valid, 'messages': messages})
        return status

class SecretManager(models.Manager):
    def addSecret(self, user_id, postData):
        if len(postData['secretmsg']) < 1:
            return {'valid': False, 'msg': 'Message field cannot be blank'}
        Secret.secretMan.create(message=postData['secretmsg'], user=User.userManager.get(id=user_id))
        return {'valid': True}
    def likeSecret(self, user_id, secret_id):
        this_user = User.userManager.get(id=user_id)
        this_secret = Secret.secretMan.get(id=secret_id)
        if this_user in this_secret.like.all() :
            print "** Hm. Must be a big fan. **"
            return {'valid': False, 'msg': "You've liked this secret already."}
        else:
            this_user.liked.add(this_secret)
            return {'valid': True}

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    userManager = UserManager()

class Secret(models.Model):
    message = models.TextField()
    user = models.ForeignKey(User, related_name="secrets")
    like = models.ManyToManyField(User, related_name="liked")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    secretMan = SecretManager()
