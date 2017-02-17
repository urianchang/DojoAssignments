"""
Radix Sort:
Radix sort is a non-comparative integer sorting algorithm that sorts data with
integer keys by grouping keys by the individual digits which share the same
significant position and value. A positional notation is required, but because
integers can represent strings of characters (e.g., names or dates) and specially
formatted floating point numbers, radix sort is not limited to integers.

Sort by starting with least significant digit and moving up to most significant.
"""
def radixSort(arr):
    messy = True
    divisor = 1
    while messy:
        messy = False
        for index in range(1, len(arr)):
            value = arr[index]
            pos = index
            while pos > 0:
                if (value/divisor)%10 < (arr[pos-1]/divisor)%10:
                    messy = True
                    arr[pos], arr[pos-1] = arr[pos-1], arr[pos]
                pos -= 1
        divisor *= 10
        print arr # Print array to make sure sort is moving expectedly
    return arr

b = [123, 400, 99, 81, 42, 1, 8, 333]
# [400, 81, 1, 42, 123, 333, 8, 99]
# [400, 1, 8, 123, 333, 42, 81, 99]
# [1, 8, 42, 81, 99, 123, 333, 400]
print radixSort(b)
