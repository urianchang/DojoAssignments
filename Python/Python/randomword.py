import string
import random

arr = []
for num in range(1,15):
    arr.append(random.choice(string.ascii_uppercase+string.digits))
print "".join(arr)
