/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    
    const n = s.length; // length of string
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0)); // create a 2D array of size n x n

    for (let i = n - 1; i >= 0; i--) {
        f[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] == s[j]) {
                f[i][j] = f[i][j - 1];
            } else {
                let minn = Number.MAX_VALUE;
                for (let k = i; k < j; k++) {
                    minn = Math.min(minn, f[i][k] + f[k + 1][j]);
                }
                f[i][j] = minn;
            }
        }
    }
    return f[0][n - 1];  
};