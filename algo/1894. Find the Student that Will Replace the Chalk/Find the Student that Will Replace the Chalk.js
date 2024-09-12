/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const totalChalk = chalk.reduce((acc, curr) => acc + curr, 0);
    k %= totalChalk;
    
    for (let i = 0; i < chalk.length; i++) {
        if (k < chalk[i]) return i;
        k -= chalk[i];
    }
    return -1;  
};