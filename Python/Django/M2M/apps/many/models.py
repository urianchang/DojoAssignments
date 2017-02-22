from __future__ import unicode_literals
from django.db import models

# Create your models here.
class UserInterestManager(models.Manager):
    def addStuff(self, **kwargs):
        msglist = []
        name = kwargs['name'][0]
        interest = kwargs['interest'][0]
        if len(name) < 1:
            msglist.append("Name cannot be blank")
        if len(interest) < 1:
            msglist.append("Interest cannot be blank")
        if not msglist:
            name = name.lower()
            interest = interest.lower()
            if len(User.uiManager.filter(name=name)) > 0:
                print "** User found in database **"
                if User.uiManager.filter(name=name).filter(user_interests__name=interest):
                    print "** User has that interest already **"
                    valid = False
                    msglist.append("That user and interest already exist.")
                    return {'valid': valid, 'msglist': msglist}
                elif len(Interest.objects.filter(name=interest)) > 0:
                    print "** Interest is in the DB, adding to user **"
                    this_user = User.uiManager.get(name=name)
                    this_interest = Interest.objects.get(name=interest)
                    this_user.user_interests.add(this_interest)
                    msglist.append("Added interest, " + str(interest) + ", to " + str(name))
                else:
                    print "** Adding new interest to the user **"
                    this_user = User.uiManager.get(name=name)
                    this_interest = Interest.objects.create(name=interest)
                    this_user.user_interests.add(this_interest)
                    msglist.append("Added new interest, " + str(interest) + ", to " +str(name))
            else:
                if len(Interest.objects.filter(name=interest)) > 0:
                    print "** Interest is in the DB, adding to new user **"
                    this_user = User.uiManager.create(name=name)
                    this_interest = Interest.objects.get(name=interest)
                    this_user.user_interests.add(this_interest)
                    msglist.append("Added interest, " + str(interest) + ", to new user, " + str(name))
                else:
                    print "**Adding new user and new interest**"
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
    def checkFor(self, name):
        print "** CHECKING FOR USER IN DB **"
        if len(User.uiManager.filter(name=name)) > 0:
            print "** USER FOUND **"
            return [True, User.uiManager.get(name=name)]
        else:
            print "** USER NOT FOUND **"
            return [False]
    def removeInterest(self, **kwargs):
        interest = kwargs['id'][0]
        name = kwargs['name'][0]
        this_user = User.uiManager.get(name=name)
        this_user.user_interests.get(id=interest).delete()
        return '/users/' + str(name)
    def countUsers(self):
        interestList = Interest.objects.all()
        countDict = {}
        for interest in interestList:
            count = len(User.uiManager.filter(user_interests__name=interest.name))
            countDict.update({interest.name : count})
        return countDict

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
