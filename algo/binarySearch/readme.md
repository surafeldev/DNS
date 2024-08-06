# what is Binary search 

Binary search is an efficient algorithm for finding an item from a sorted list of items. 
It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

# Binary Search Algorithm

Binary search is a widely used algorithm for searching elements in a sorted list. It follows a divide-and-conquer approach to efficiently locate a target value.

## Steps of Binary Search:

1. **Initialize**: Start with two pointers, `low` and `high`, which represent the range of indices in the list.
2. **Calculate Midpoint**: Find the midpoint index `mid` of the current range.
3. **Compare**: Compare the target value with the value at the midpoint:
    - If the target is equal to the midpoint value, you've found the item.
    - If the target is less than the midpoint value, narrow the search to the left half.
    - If the target is greater than the midpoint value, narrow the search to the right half.
4. **Repeat**: Repeat the process with the new range until the target is found or the range is empty.

## Example in Pseudocode:

    
    function binarySearch(array, target):
        low = 0
        high = length(array) - 1

        while low <= high:
                mid = floor((low + high) / 2)
                if array[mid] == target:
                        return mid
                else if array[mid] < target:
                        low = mid + 1
                else:
                        high = mid - 1

        return -1  // Target not found
    

## Example in JavaScript:

    ```javascript
    function binarySearch(array, target) {
        let low = 0;
        let high = array.length - 1;

        while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (array[mid] === target) {
                        return mid;
                } else if (array[mid] < target) {
                        low = mid + 1;
                } else {
                        high = mid - 1;
                }
        }

        return -1; // Target not found
    }
    ```

Binary search has a time complexity of (O(\log n)), making it much more efficient than a linear search for large lists.