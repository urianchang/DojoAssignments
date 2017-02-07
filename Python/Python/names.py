"""
Assignment: Names

PART I:
Given a list, create a program that outputs...

PART II:
Now, given a dictionary, create a program that prints the following format...
"""

# PART I:
students = [
     {'first_name' :  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

# Function for if we know the keys that we want.
def printList(arr):
    for value in arr:
        print value.get('first_name'), value.get('last_name')

# Function for if we don't know the name of the keys that we want.
def printStud(arr):
    for dic in arr:
        for value in dic.itervalues():
            print value,
        print ""

print "PART I:"
printStud(students)
print ""

# PART II:
users = {
 'Students': [
     {'first_name' :  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def printDic(d):
    for sec_title, sec_data in d.iteritems():
        print sec_title
        count = 1
        for person in sec_data:
            #print person
            print str(count) + " - ",
            name_len = 0
            for name in person.itervalues():
                name_len += len(name)
                print name,
            print " - " + str(name_len)
            count += 1

print "PART II:"
printDic(users)
