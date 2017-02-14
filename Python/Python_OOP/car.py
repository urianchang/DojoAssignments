"""
Assignment: Car
"""

class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        tax = 0.12
        if price > 10000:
            tax = 0.15
        self.tax = tax
    def display_all(self):
        print "\nPrice: $" + str(self.price)
        print "Speed:", self.speed
        print "Fuel:", self.fuel
        print "Mileage:", self.mileage
        print "Tax:", self.tax

Car(2000, "35mph", "Full", "15mpg").display_all()
Car(2000, "5mph", "Not Full", "105mpg").display_all()
Car(2000, "15mph", "Kind of Full", "95mpg").display_all()
Car(2000, "25mph", "Full", "25mpg").display_all()
Car(2000, "45mph", "Empty", "25mpg").display_all()
Car(2000000, "35mph", "Empty", "15mpg").display_all()
