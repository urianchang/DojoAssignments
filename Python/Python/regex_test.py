import re

a = "word"
b = "word123"

if re.search(r'[0-9]', a):
    print "Found in a"

if re.search(r'[0-9]', b):
    print "Found in b"
