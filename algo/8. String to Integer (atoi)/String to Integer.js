/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const limit = 2 ** 31;
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // Skip whitespaces
    while (s[i] === ' ') {
        i++;
    }
    
    // Check if there is a sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Parse the number
    while (i < s.length) {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
        
        if (digit < 0 || digit > 9) {
            break;
        }
        
        if (result > Math.floor((limit - digit) / 10)) {
            return sign === 1 ? limit - 1 : -limit;
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    return sign * result;
};