/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charIndexMap = new Map();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (charIndexMap.has(s[right]) && charIndexMap.get(s[right]) >= left) {
            left = charIndexMap.get(s[right]) + 1;
        }
        charIndexMap.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};