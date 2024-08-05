const { expect } = require('chai');

// The function to be tested
var kthDistinct = function(arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    let keys = Array.from(map.keys());
    for (let i = 0; i < keys.length; i++) {
        if (map.get(keys[i]) === 1) {
            k--;
        }
        if (k === 0) {
            return keys[i];
        }
    }
    return '';
};

// Unit tests
describe('kthDistinct', function() {
    it('should return the 2nd distinct string "a" from ["d","b","c","b","c","a"]', function() {
        let arr = ["d","b","c","b","c","a"];
        let k = 2;
        let result = kthDistinct(arr, k);
        expect(result).to.equal("a");
    });

    it('should return the 1st distinct string "aaa" from ["aaa","aa","a"]', function() {
        let arr = ["aaa","aa","a"];
        let k = 1;
        let result = kthDistinct(arr, k);
        expect(result).to.equal("aaa");
    });

    it('should return an empty string when there are fewer than 3 distinct strings in ["a","b","a"]', function() {
        let arr = ["a","b","a"];
        let k = 3;
        let result = kthDistinct(arr, k);
        expect(result).to.equal("");
    });

    it('should return the 1st distinct string "a" from ["a","b","c"]', function() {
        let arr = ["a","b","c"];
        let k = 1;
        let result = kthDistinct(arr, k);
        expect(result).to.equal("a");
    });

    it('should return an empty string for an empty array', function() {
        let arr = [];
        let k = 1;
        let result = kthDistinct(arr, k);
        expect(result).to.equal("");
    });
});