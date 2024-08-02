/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map(); // O(n) space complexity

    for (let i = 0; i < nums.length; i++) { // O(n) time complexity 
        const complement = target - nums[i];

        if (map.has(complement)) { // O(1) time complexity
            return [map.get(complement), i];
        }
        map.set(nums[i], i); // O(1) time complexity
    }
    return []; // O(1) time complexity
}