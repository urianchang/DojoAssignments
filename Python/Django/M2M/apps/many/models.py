from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserInterestManager(models.Manager):
    def addStuff(self, **kwargs):
        msglist = []
        name = kwargs['name'][0]
        interest = kwargs['interest'][0]
        print name, interest
        if len(name) < 1:
            msglist.append("Name cannot be blank")
        if len(interest) < 1:
            msglist.append("Interest cannot be blank")
        if not msglist:
            name = name.lower()
            interest = interest.lower()
            if len(User.uiManager.filter(name=name)) > 0:
                print "** User found in database **"
                print User.uiManager.filter(name=name)
                if User.uiManager.filter(name=name).filter(user_interests__name=interest):
                    print "** User has that interest already **"
                    valid = False
                    msglist.append("That user and interest already exist.")
                    return {'valid': valid, 'msglist': msglist}
                else:
                    print "** Adding that interest to the user **"
                    this_user = User.uiManager.get(name=name)
                    this_interest = Interest.objects.create(name=interest)
                    this_user.user_interests.add(this_interest)
                    msglist.append("Added new interest, " + str(interest) + ", to " +str(name))
            else:
                print "Adding new user and interest"
                this_user = User.uiManager.create(name=name)
                this_user = User.uiManager.get(name=name)
                this_interest = Interest.objects.create(name=interest)
                this_user.user_interests.add(this_interest)
                msglist.append("Added new interest, "+str(interest)+", to new user, "+str(name))
            valid = True
            return {'valid': valid, 'msglist': msglist}
        else:
            valid = False
            return {'valid': valid, 'msglist': msglist}

class Interest(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class User(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    user_interests = models.ManyToManyField(Interest, related_name="interest_users")
    uiManager = UserInterestManager()
