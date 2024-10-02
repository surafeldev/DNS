/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let prefixAnd = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixAnd.push(prefixAnd[i - 1] & nums[i]);
    }
    
    let result = 0;
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (prefixAnd[right] === 0) {
            result = Math.max(result, right - left);
            left = right + 1;
        }
        right++;
    }
    
    return Math.max(result, right - left - 1);  
};