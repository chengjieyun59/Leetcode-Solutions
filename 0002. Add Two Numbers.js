/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l3 = dummy = new ListNode()
  let carry = 0

  while (l1 || l2 || carry) {
    let sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
    carry = Math.floor(sum / 10)
    l3.next = new ListNode(sum % 10)
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
    l3 = l3.next
  }

  return dummy.next
};
