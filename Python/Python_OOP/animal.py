"""
Assignment: Animal

Objective
The objective of this assignment is to help you understand inheritance.
Remember that a class is more than just a collection of properties and methods.
If you want to create a new class with attributes and methods that are already
defined in another class, you can have this new class inherit from that other
class (called the parent) instead of copying and pasting code from the original
class. Child classes can access all the attributes and methods of a parent class
AND have new attributes and methods of its own, for child instances to call. As
we see with Wizard / Ninja / Samurai (that are each descended from Human), we
can have numerous unique child classes that inherit from the same parent class.

To Do
Create a class called Animal with the following attributes: name, and health.
Give the animal following three methods: walk, run, and displayHealth.
Give a new animal a health of 100 when it gets created.
When a walk() method is invoked, have the health decrease by 1.
When a run() method is invoked, have the health decrease by 5.
When a displayHealth() method is invoked, display on screen the name of the Animal and the health.

Create an instance of the animal called 'animal' and have this animal:
walk three times, run twice, and have it display its health.

Now, create another class called Dog that inherits everything that the Animal does and has,
but 1) have the default health be 150 and 2) add a new method called pet, which when invoked,
increase the health by 5.
Have the Dog walk() three times, run() twice, pet() once, and have it displayHealth().

Now, create another class called Dragon that also inherits everything from Animal,
but 1) have the default health be 170 and 2) add a new method called fly, which when invoked,
decreased the health by 10.
Have the Dragon walk() three times, run() twice, fly() twice, and have it displayHealth().
When the Dragon's displayHealth function is called, have it say 'this is a dragon!'
before it displays the default information (by calling the parent's displayHealth function).

Now for the first instance of the animal (instance called 'animal'),
try calling fly() or pet() and make sure this doesn't work.  (-:
"""

class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self, num = 1):
        self.health -= 1 * num
        return self
    def run(self, num = 1):
        self.health -= 5 * num
        return self
    def displayHealth(self):
        print self.name + " has a health of: " + str(self.health)

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self, num = 1):
        self.health += 5 * num
        return self

class Dragon(Animal):
    def __init__(self, name = 'drago'):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self, num = 1):
        self.health -= 10*num
        return self
    def displayHealth(self):
        print "this is a dragon!"
        super(Dragon, self).displayHealth()


Animal('animal').walk(3).run(2).displayHealth()
Dog('iamdog').walk(3).run(2).pet(1).displayHealth()
Dragon().walk(3).run(2).fly(2).displayHealth()
#Animal('animal').pet(3).run(2).displayHealth()
#Animal('animal').fly(3).run(2).displayHealth()
