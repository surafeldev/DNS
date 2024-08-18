/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n).fill(0); // create an array of size n

    dp[0] = 1; // set the first element to 1

    let p2 = 0, p3 = 0, p5 = 0; // initialize pointers to 0

    for (let i = 1; i < n; i++) { // iterate through the array
        dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
        if (dp[i] === dp[p2] * 2) p2++;
        if (dp[i] === dp[p3] * 3) p3++;
        if (dp[i] === dp[p5] * 5) p5++;
    }
     
    return dp[n - 1]; // return the last element of the array
    
};