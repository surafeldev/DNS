/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Helper function to calculate GCD of two numbers
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let current = head;
    while (current && current.next) {
        let next = current.next;
        let gcdValue = gcd(current.val, next.val);
        current.next = new ListNode(gcdValue, next);
        current = next;
    }
    return head;
};