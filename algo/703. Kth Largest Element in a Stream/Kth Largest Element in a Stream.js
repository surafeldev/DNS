class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];
        
        // Initialize the heap with the first k elements
        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.minHeap.length < this.k) {
            this.minHeap.push(val);
            this.minHeap.sort((a, b) => a - b);
        } else if (val > this.minHeap[0]) {
            this.minHeap[0] = val;
            this.minHeap.sort((a, b) => a - b);
        }
        return this.minHeap[0];
    }
}