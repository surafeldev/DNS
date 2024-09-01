/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const sum = new Array(n).fill(0);
    sum[n - 1] = piles[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        sum[i] = sum[i + 1] + piles[i];
    }
    const helper = (i, m) => {
        if (i === n) return 0;
        if (2 * m >= n - i) return sum[i];
        if (dp[i][m]) return dp[i][m];
        let res = 0;
        for (let x = 1; x <= 2 * m; x++) {
            res = Math.max(res, sum[i] - helper(i + x, Math.max(m, x)));
        }
        dp[i][m] = res;
        return res;
    };
    return helper(0, 1);  
};