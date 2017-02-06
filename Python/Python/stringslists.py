# String and List Practice

# Find and replace
str = "If monkeys like bananas, then I must be a monkey!"
print str.count("monkey")
print str.replace("monkey", "alligator")

# Min and max
x = [2,54,-2,7,12,98, "word"]
print max(x)
print min(x)

# First and Last
y = ["hello",2,54,-2,7,12,98,"world"]
print y[0], y[len(y)-1]
z = [y[0], y[len(y)-1]]
print z

# New List
arr1 = [19,2,54,-2,7,12,98,32,10,-3,6]
arr2 = []
arr1.sort()
for x in arr1:
    if (x < 0) :
        arr2.append(x)
for y in arr2:
    arr1.remove(y)
arr1.insert(0, arr2)
print arr1
