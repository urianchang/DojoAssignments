"""
Insertion Sort:
Build the final sorted array (or list) one item at a time.
"""
def insertionSort(arr):
    for index in range(1, len(arr)):
        value = arr[index]
        pos = index
        while pos > 0:
            if value < arr[pos-1]:
                temp = arr[pos]
                arr[pos] = arr[pos-1]
                arr[pos-1] = temp
            pos -= 1
        print arr
    return arr

b = [6, 5, 3, 1, 8, 7, 2, 4]
print insertionSort(b)
