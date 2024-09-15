/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
        let allowedChars = new Set(allowed);
    let count = 0;
    
    for (let word of words) {
        let isConsistent = true;
        
        for (let char of word) {
            if (!allowedChars.has(char)) {
                isConsistent = false;
                break;
            }
        }
        
        if (isConsistent) {
            count++;
        }
    }
    
    return count;  
};