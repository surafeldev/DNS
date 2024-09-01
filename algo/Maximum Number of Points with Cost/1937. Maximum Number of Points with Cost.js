/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let n = points.length; // number of rows 
    let m = points[0].length; // number of columns
    let dp = new Array(n).fill(0).map(() => new Array(m).fill(0)); // create a 2D array of size n x m
    
    for (let i = 0; i < m; i++) { // fill the first row with the values from the first row of the points array
        dp[0][i] = points[0][i];
    }
    
    for (let i = 1; i < n; i++) { // iterate through the rows
        let left = new Array(m);
        let right = new Array(m);
        
        left[0] = dp[i - 1][0];
        for (let j = 1; j < m; j++) {
            left[j] = Math.max(left[j - 1] - 1, dp[i - 1][j]);
        }
        
        right[m - 1] = dp[i - 1][m - 1];
        for (let j = m - 2; j >= 0; j--) {
            right[j] = Math.max(right[j + 1] - 1, dp[i - 1][j]);
        }
        
        for (let j = 0; j < m; j++) {
            dp[i][j] = points[i][j] + Math.max(left[j], right[j]);
        }
    }
    
    return Math.max(...dp[n - 1]);  
};