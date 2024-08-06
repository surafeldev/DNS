/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {

    const frequency = {}; // {a: 1, b: 2, c: 3}
    for (let char of word) {
        if (!frequency[char]) {
            frequency[char] = 0;
        }
        frequency[char]++;
    }

    const sortedLetters = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]); // [c, b, a] 
 
    let totalPushes = 0;
    let keyPushes = 1;
    let lettersAssigned = 0;

    for (let letter of sortedLetters) { // c, b, a
        totalPushes += frequency[letter] * keyPushes;
        lettersAssigned++;
        if (lettersAssigned % 3 === 0) {
            keyPushes++;
        }
    }

    return totalPushes;
};
