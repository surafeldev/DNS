/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */

/**
 * Generates a spiral matrix of size `rows` x `cols` starting from the position (`rStart`, `cStart`).
 * The spiral matrix is filled with coordinates in the order they are visited.
 *
 * @param {number} rows - The number of rows in the spiral matrix.
 * @param {number} cols - The number of columns in the spiral matrix.
 * @param {number} rStart - The starting row position.
 * @param {number} cStart - The starting column position.
 * @returns {number[][]} - The spiral matrix filled with coordinates.
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