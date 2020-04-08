/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 * O(1) space, O(n) time.
 * Two-pointer approach.
 * p2 moves down twice the amount of nodes as p1 does,
 * so when p2 reaches the end, p1 is only half way.
 * Beware of odd & even length of linked list.
 */

const middleNode = head => {
  let p1 = p2 = head;
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return p1;
};