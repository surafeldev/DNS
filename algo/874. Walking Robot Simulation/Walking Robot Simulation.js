/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const obstacleSet = new Set();
    for (let [x, y] of obstacles) {
        obstacleSet.add(x + ',' + y);
    }
    let x = 0, y = 0, dir = 0, res = 0;
    for (let command of commands) {
        if (command === -2) {
            dir = (dir + 3) % 4;
        } else if (command === -1) {
            dir = (dir + 1) % 4;
        } else {
            let dx = dirs[dir][0], dy = dirs[dir][1];
            while (command--) {
                let key = (x + dx) + ',' + (y + dy);
                if (!obstacleSet.has(key)) {
                    x += dx;
                    y += dy;
                    res = Math.max(res, x * x + y * y);
                } else {
                    break;
                }
            }
        }
    }
    return res;  
};