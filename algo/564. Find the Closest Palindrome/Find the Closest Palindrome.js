/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    const len = n.length;
    const num = parseInt(n);

    // Handle edge cases
    if (num === 1) return '0';
    if (num < 10) return (num - 1).toString(); // Handle single-digit numbers
    if (num === Math.pow(10, len - 1)) return (num - 1).toString();
    if (num === Math.pow(10, len) - 1) return (num + 1).toString();

    const half = n.slice(0, Math.floor((len + 1) / 2));
    const candidates = new Set();
    
    // Generate palindromes by mirroring the first half
    const mirror = (s) => s + s.slice(0, len % 2).split('').reverse().join('');
    candidates.add(mirror(half));
    
    // Adjust the first half by +1 and -1 and create palindromes
    const lowerHalf = (parseInt(half) - 1).toString();
    const upperHalf = (parseInt(half) + 1).toString();
    candidates.add(mirror(lowerHalf));
    candidates.add(mirror(upperHalf));

    // Add edge cases for numbers like 1000, 10000, etc.
    candidates.add('1' + '0'.repeat(len - 1) + '1');
    candidates.add('9'.repeat(len - 1));

    let min = Infinity;
    let res = '';
    for (const candidate of candidates) {
        // Ensure candidate is a valid integer without leading zeros
        const candidateNum = parseInt(candidate);
        if (candidateNum === num) continue;
        const diff = Math.abs(candidateNum - num);
        if (diff < min || (diff === min && candidateNum < parseInt(res))) {
            min = diff;
            res = candidateNum.toString();
        }
    }
    return res;
};