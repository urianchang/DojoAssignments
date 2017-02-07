"""
Push Front:

Write a function that takes in a list, and adds a value to the front of that list, outputting the changed list.
This should be done in place, meaning don't create a new list,
but change the existing one. Try using your newly discovered Python swap!
"""

def push_front(arr):
    x = len(arr)
    while (x > 0):
        arr[x-1] = arr[x-2]
        x -= 1
    arr[0] = "new value"
    return arr

print push_front([1, 2, 3, 4])
