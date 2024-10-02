/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let prefixXor = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        prefixXor.push(prefixXor[i - 1] ^ arr[i]);
    }
    
    let result = [];
    for (let query of queries) {
        let left = query[0];
        let right = query[1];
        
        if (left === 0) {
            result.push(prefixXor[right]);
        } else {
            result.push(prefixXor[right] ^ prefixXor[left - 1]);
        }
    }
    
    return result;  
};