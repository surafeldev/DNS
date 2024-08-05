var kthDistinct = function(arr, k) {
    let frequencyMap = {};
    
    // Step 1: Count the frequency of each string
    for (let str of arr) {
        if (frequencyMap[str]) {
            frequencyMap[str]++;
        } else {
            frequencyMap[str] = 1;
        }
    }
    
    // Step 2: Collect distinct strings
    let distinctStrings = [];
    for (let str of arr) {
        if (frequencyMap[str] === 1) {
            distinctStrings.push(str);
        }
    }
    
    // Step 3: Return the k-th distinct string if it exists
    if (k <= distinctStrings.length) {
        return distinctStrings[k - 1];
    } else {
        return "";
    }
};