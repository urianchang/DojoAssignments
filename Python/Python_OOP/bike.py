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
    def ride(self, num = 1):
        print "\nRiding...roughly" * num
        self.miles += 10 * num
        return self
    def reverse(self, num = 1):
        print "\nReversing" * num
        self.miles -= 5 * num
        return self

bike1 = Bike(200, "25mph")
bike2 = Bike(100, "10mph")
bike3 = Bike(500, "30mph")

print "Bike 1..."
bike1.ride(3).reverse(1).displayInfo()

print "\nBike 2..."
bike2.ride(2).reverse(2).displayInfo()

print "\nBike 3..."
bike3.reverse(3).displayInfo()
