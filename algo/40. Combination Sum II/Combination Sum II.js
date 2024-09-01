/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
        let result = [];
        let temp = [];
        let start = 0;
        let sum = 0;
        
        candidates.sort((a, b) => a - b);
        
        function backtrack(start, sum) {
            if (sum === target) {
                result.push([...temp]);
                return;
            }
            
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }
                
                if (sum + candidates[i] > target) {
                    break;
                }
                
                temp.push(candidates[i]);
                backtrack(i + 1, sum + candidates[i]);
                temp.pop();
            }
        }
        
        backtrack(start, sum);
        
        return result;  
};