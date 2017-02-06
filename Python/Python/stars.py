"""
Assignment: Stars

Completed the assignment by myself.

Part I:
Create a function called draw_stars() that takes a list of numbers and prints out *.

Part II:
Modify the function above. Allow a list containing integers and strings to be passed
to the draw_stars() function. When a string is passed, instead of displaying *, display
the first letter of the string. You may use .lower() string method for this part.
"""

# Part I:
def draw_stars(arr):
    for value in arr:
        value_str = ""
        for digit in range(1, value+1):
            value_str += "*"
        print value_str

x = [4, 6, 1, 3, 5, 7, 25]
print "PART I:"
draw_stars(x)
print ""

# Part II:
def draw(arr):
    for value in arr:
        value_str = ""
        if (isinstance(value, str)):
            symbol = value.lower()[0]
            maximum = len(value)
        else:
            symbol = "*"
            maximum = value
        for digit in range(1, maximum+1):
            value_str += symbol
        print value_str

a = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
print "PART II:"
draw(a)
