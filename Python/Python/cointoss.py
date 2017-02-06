"""
Coin Toss:
You're going to create a program that simulates tossing a coin 5,000 times.
Your program should display how many times head/tail appears.

HINT: Use the python built-in round function to convert that floating point number
into an integer.
"""

import random

def coinflips(num):
    headcount = 0
    tailcount = 0
    for attempt in range(1, num+1):
        str_result = "Attempt #"+str(attempt)+": Throwing a coin ... "
        result = random.random()
        if (round(result) == 0):
            headcount += 1
            str_result += "It's a head!"
        else:
            tailcount += 1
            str_result += "It's a tail!"
        str_result += " ... Got "+str(headcount)+" head(s) so far and "+str(tailcount)+" tail(s) so far"
        print str_result
    print "Ending the program, thank you!"

coinflips(10)
