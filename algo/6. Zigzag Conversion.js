/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
        
        if (numRows === 1) return s;
    
        let rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
        let goingDown = false;
        let currentRow = 0;
    
        for (let i = 0; i < s.length; i++) {
            rows[currentRow] += s[i];
            if (currentRow === 0 || currentRow === numRows - 1) {
                goingDown = !goingDown;
            }
            currentRow += goingDown ? 1 : -1;
        }
    
        return rows.join("");  
};