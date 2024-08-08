/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let result = [];
    let r = rStart;
    let c = cStart;
    let step = 1;
    let stepCount = 0;
    let direction = 0;
    let steps = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while (result.length < rows * cols) {
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
            result.push([r, c]);
        }
        r += steps[direction][0];
        c += steps[direction][1];
        stepCount++;
        if (stepCount === step) {
            direction = (direction + 1) % 4;
            if (direction === 0 || direction === 2) {
                step++;
            }
            stepCount = 0;
        }
    }
    return result;  
};