# Multiples, Sum, Average

# Multiples:
# Part I: Print odd numbers from 1 to 1000. Use for loop and don't use an array.
for odd in range(1, 1001, 2):
    print odd
# Part II: Prints all the multiples of 5 from 5 to 1,000,000.
for num in range(5, 1000001, 5):
    print num

# Sum List: Create a program that prints the sum of all values in the list.
a = [1, 2, 5, 10, 255, 3]
sum = 0
for num in a:
    sum += num
print sum

# Average List: Create a program that prints the average of the values in the list (same list as above).
avg = sum/len(a)
print avg
