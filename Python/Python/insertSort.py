"""
Insertion Sort:
Build the final sorted array (or list) one item at a time.
"""
def insertionSort(arr):
    for index in range(1, len(arr)):
        value = arr[index]
        pos = index
        while pos > 0 and value < arr[pos-1]:
            arr[pos] = arr[pos-1]
            pos -= 1
        arr[pos] = value
    return arr

b = [6, 5, 3, 1, 8, 7, 2, 4]
print insertionSort(b)
