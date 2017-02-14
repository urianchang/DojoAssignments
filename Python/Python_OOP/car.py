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
        print 
