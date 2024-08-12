/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = new Set();

    const dfs = (x, y) => {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0 || visited.has(x * m + y)) {
            return;
        }
        visited.add(x * m + y);
        for (let [dx, dy] of dirs) {
            dfs(x + dx, y + dy);
        }
    };

    const check = () => {
        let islands = 0;
        visited.clear();
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1 && !visited.has(i * m + j)) {
                    islands++;
                    if (islands > 1) {
                        return false;
                    }
                    dfs(i, j);
                }
            }
        }
        return islands === 1;
    };

    if (!check()) {
        return 0;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                if (!check()) {
                    return 1;
                }
                grid[i][j] = 1;
            }
        }
    }

    return 2; 
};