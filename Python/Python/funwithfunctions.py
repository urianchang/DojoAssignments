# Fun with Functions

'''
Odd/Even:
Create a function called odd_even that counts from 1 to 2000.
As your loop executes, have your program print the number of that
iteration and specify whether it's an odd or even number.
'''
def odd_even(start, stop):
    for num in range(start, stop+1):
        if (num%2 == 0):
            print "Number is " + str(num) + ". This is an even number."
        else:
            print "Number is " + str(num) + ". This is an odd number."

#odd_even(1, 2000)

'''
Multiply:
Create a function called multiply that iterates through each value in a list
and returns a list where each value has been multiplied by 5. The function should
multiply each value in the list by the second argument.
'''
def multiply(arr, num):
    newarr = []
    for val in arr:
        newarr.append(val*num)
    return newarr

a = [2, 4, 10, 16]
b = multiply(a, 5)
print b

'''
Hacker Challenge:
Write a function that takes the multiply function call as an argument.
Your new function should return the multiplied list as a two-dimensional list.
Each internal list should contain as many ones as the number in the original list.
'''
def layered_multiples(arr):
    arr1 = []
    arr2 = []
    for num in arr:
        for digit in range(1, num+1):
            arr1.append(1)
        arr2.append(arr1)
    return arr2
x = layered_multiples(multiply([2, 4, 5], 3))
print x
