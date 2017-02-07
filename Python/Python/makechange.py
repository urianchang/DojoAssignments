"""
Make Change

Write a function that takes an amount of money in cents and returns the
fewest number of coins possible for the number of cents. The output should be
a dictionary.

Assuming American currency:
Dollar: 1
Half-Dollar: 0.5 (optional)
Quarter: 0.25
Dime: 0.1
Nickel: 0.05
Penny: 0.01
"""

def coinage(cents):
    coins = {}
    if (cents >= 100):
        coins["dollars"] = int(cents/100)
        cents = cents%100
    if (cents >= 50):
        coins["half-dollars"] = 1
        cents = cents - 50
    coins["quarters"] = int(cents/25)
    cents = cents%25
    coins["dimes"] = int(cents/10)
    cents = cents%10
    coins["nickels"] = int(cents/5)
    cents = cents%5
    coins["pennies"] = cents
    return coins

def coinop(cents):
    coins = ["dollars", "half-dollars", "quarters", "dimes", "nickels", "pennies"]
    denom = [100, 50, 25, 10, 5, 1]
    change = {}
    ind = 0
    for ind in range(len(denom)):
        change[coins[ind]] = int(cents/denom[ind])
        cents = cents%denom[ind]
        ind += 1
    return change

print coinop(387)


# print coinage(387)
