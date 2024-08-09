/**
 * @param {number[][]} grid
 * @return {number}
 */

var numMagicSquaresInside = function(grid) {

    const isMagicSquare = (grid, row, col) => {

        const nums = new Set();
        
        let sum = grid[row][col] + grid[row][col+1] + grid[row][col+2];
        
        // Check rows
        for (let i = 0; i < 3; i++) {            
            let rowSum = 0;

            for (let j = 0; j < 3; j++) {
                let num = grid[row+i][col+j];

                if (num < 1 || num > 9 || nums.has(num)) return false;

                nums.add(num);
                rowSum += num;
            }

            if (rowSum !== sum) return false;
        }
        
        // Check columns
        for (let j = 0; j < 3; j++) {

            let colSum = 0;

            for (let i = 0; i < 3; i++) {
                colSum += grid[row+i][col+j];
            }
            
            if (colSum !== sum) return false;
        }
        
        // Check diagonals
        if (grid[row][col] + grid[row+1][col+1] + grid[row+2][col+2] !== sum) return false;
        if (grid[row][col+2] + grid[row+1][col+1] + grid[row+2][col] !== sum) return false;
        
        return true;
    };

    let count = 0;

    for (let i = 0; i <= grid.length - 3; i++) {
        for (let j = 0; j <= grid[0].length - 3; j++) {
            if (isMagicSquare(grid, i, j)) {
                count++;
            }
        }
    }
    
    return count;
};