/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function simplify(numerator, denominator) {
        let commonDivisor = gcd(Math.abs(numerator), Math.abs(denominator));
        return [numerator / commonDivisor, denominator / commonDivisor];
    }

    let fractions = expression.match(/[+-]?\d+\/\d+/g);
    
    let numerator = 0, denominator = 1;

    for (let fraction of fractions) {
        let [num, denom] = fraction.split('/').map(Number);
        
        let commonDenom = denominator * denom;
        
        numerator = numerator * denom + num * denominator;
        denominator = commonDenom;
    }

    [numerator, denominator] = simplify(numerator, denominator);

    return `${numerator}/${denominator}`;
};