"""
Bubble sort:

Build an algorithm for bubble sort.
"""

def bubble(arr):
    size = len(arr)
    count = 0
    while (count < size):
        count += 1
        for num in range(0, size-1):
            if (arr[num] > arr[num+1]):
                arr[num], arr[num+1] = arr[num+1], arr[num]
        print count
        print arr
    return arr

print bubble([6, 5, 3, 1, 8, 7, 2, 4])
