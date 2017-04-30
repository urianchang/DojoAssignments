# Python script for sending HTTP request to server

# import libraries
import requests
import json
# These two libraries aren't necessary if using requests
# import urllib2
# import urllib

# GET request
# URL = 'http://52.25.79.161/questions'
# r = requests.get(URL)
# print r.json()

# POST request
# URL = 'http://localhost:8000/questions'
# newQuestion = {'question': "Where is the library?", 'user': "PYTHON TESTER", 'description': "Does this work?" }
# print json.dumps(newQuestion)
# r = requests.post(URL, json = newUser)
# print r

# How to use urllib libraries...
# URL = 'http://34.210.68.195/create'
# newUser =  { 'stalls': {'name': 'Urian' }}
# mydata = urllib.urlencode(newUser)
# mydata = mydata.encode('utf-8')
# req = urllib2.Request(URL, mydata)
# print req

# How to ask for user input on a continuous loop...
# response = raw_input('What is your name? ')
# while response != "stop":
#     if response == 'a':
#         print "a pressed"
#     elif response == 'b':
#         print "b pressed"
#     response = raw_input('What is your name? ')
