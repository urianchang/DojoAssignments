"""
Bubble sort:

Build an algorithm for bubble sort.
"""

def bubble(arr):
    size = len(arr)
    messy = True
    while messy:
        messy = False
        for num in range(0, size-1):
            if (arr[num] > arr[num+1]):
                messy = True
                arr[num], arr[num+1] = arr[num+1], arr[num]
    return arr

print bubble([6, 5, 3, 1, 8, 7, 2, 4])
#print bubble([8, 7, 6, 5, 4, 3, 2, 1])
