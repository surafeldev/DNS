/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    let keys = Array.from(map.keys()).sort();
    for (let i = 0; i < keys.length; i++) {
        if (map.get(keys[i]) === 1) {
            k--;
        }
        if (k === 0) {
            return keys[i];
        }
    }
    return '';
    
};