"""
Selection Sort:

divides the input list into two parts: the sublist of items already sorted,
which is built up from left to right at the front (left) of the list, and
the sublist of items remaining to be sorted that occupy the rest of the list.
Initially, the sorted sublist is empty and the unsorted sublist is the entire
input list. The algorithm proceeds by finding the smallest (or largest,
depending on sorting order) element in the unsorted sublist, exchanging it
with the leftmost unsorted element (putting it in sorted order), and moving
the sublist boundaries one element to the right.

"""
def selectionSort(arr):
    cur_ind = 0
    while cur_ind < len(arr)-1:
        min_val = arr[cur_ind]
        min_ind = cur_ind
        for ind in range(cur_ind, len(arr)):
            if arr[ind] < min_val:
                min_val = arr[ind]
                min_ind = ind
        temp = arr[cur_ind]
        arr[cur_ind] = arr[min_ind]
        arr[min_ind] = temp
        cur_ind += 1
        print arr
    return arr

b = [9, 7, 5, 3, 1, 2]
print selectionSort(b)
