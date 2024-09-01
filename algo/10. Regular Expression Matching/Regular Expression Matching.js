/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // Base case: if the pattern is empty, return whether the string is also empty
    if (p.length === 0) {
        return s.length === 0;
    }

    // Check if the first character of s matches the first character of p or if p[0] is '.'
    let firstMatch = (s.length > 0 && (s[0] === p[0] || p[0] === '.'));

    // Handle the case where the second character of p is '*'
    if (p.length >= 2 && p[1] === '*') {
        // Check zero occurrences of the preceding element or one or more occurrences
        return (isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p)));
    } else {
        // If the second character of p is not '*', check the rest of the string and pattern
        return firstMatch && isMatch(s.substring(1), p.substring(1));
    }
};