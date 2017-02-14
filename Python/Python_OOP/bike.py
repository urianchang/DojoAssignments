"""
Assignment: Bike
"""

class Bike(object):
    def __init__(self, price, max_speed, miles = 0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayInfo(self):
        print self.price, self.max_speed, self.miles
    def ride(self):
        print "Riding...roughly"
        self.miles += 10
    def reverse(self):
        print "Reversing"
        self.miles -= 5

bike1 = Bike(200, "25mph")
bike2 = Bike(100, "10mph")
bike3 = Bike(500, "30mph")

print "Bike 1..."
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

print "\nBike 2..."
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()

print "\nBike 3..."
bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()
