/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * O(1) space, O(n) time.
 */

const removeNthFromEnd = (head, n) => {
  if (head.next === null) {
    return null;
  }
  // 2-pointer approach
  let p1 = head, i = n;
  // move pointer 2 to the end of the list
  for (p2 = head; p2 !== null; i -= 1, p2 = p2.next) {
    // when index reaches n, move pointer 1 to the next node
    if (i < 0) {
      p1 = p1.next;
    }
  }
  // now p1 and p2 are apart by n nodes, so p1 is the n-th node from the tail
  // if n is the length of the list, remove the head
  if (i === 0) {
    return head = head.next;
  }
  // remove last n-th node
  p1.next = p1.next.next;
  return head;
};