/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let vowels = 'aeiou';
    let vowelToIndex = {};
    for (let i = 0; i < vowels.length; i++) {
        vowelToIndex[vowels[i]] = i;
    }
    
    let prefixXor = [0];
    for (let i = 0; i < s.length; i++) {
        let xor = 0;
        if (vowelToIndex[s[i]] !== undefined) {
            xor = 1 << vowelToIndex[s[i]];
        }
        prefixXor.push(prefixXor[i] ^ xor);
    }
    
    let result = 0;
    let seen = {};
    for (let i = 0; i < prefixXor.length; i++) {
        if (seen[prefixXor[i]] === undefined) {
            seen[prefixXor[i]] = i;
        }
        
        result = Math.max(result, i - seen[prefixXor[i]]);
    }
    
    return result;  
};