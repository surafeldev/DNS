/**
 * @param {number} x
 * @return {number}
 */
// 
var reverse = function(x) {
    const limit = 2 ** 31;
    const isNegative = x < 0;

    x = Math.abs(x);
    let reversed = 0;

    while (x > 0) {
        // Get the last digit of x and add it to reversed
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    if (reversed > limit - 1) {
        return 0;
    }

    return isNegative ? -reversed : reversed; // If x is negative, return -reversed, otherwise return reversed  
};