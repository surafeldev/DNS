/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    
    let width = Math.floor(length / k);
    let remainder = length % k;
    
    const result = [];
    current = head;
    for (let i = 0; i < k; i++) {
        let dummy = new ListNode(0);
        let write = dummy;
        for (let j = 0; j < width + (i < remainder ? 1 : 0); j++) {
            write = write.next = new ListNode(current.val);
            if (current) current = current.next;
        }
        result.push(dummy.next);
    }
    
    return result;
};