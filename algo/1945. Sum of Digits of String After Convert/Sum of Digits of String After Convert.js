/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        result += (s.charCodeAt(i) - 96).toString();
    }
    
    for (let i = 0; i < k; i++) {
        result = result.split('').reduce((acc, curr) => acc + parseInt(curr), 0).toString();
    }
    
    return parseInt(result);  
};