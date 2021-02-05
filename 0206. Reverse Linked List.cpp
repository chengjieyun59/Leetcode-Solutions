/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
  public:
    ListNode* reverseList(ListNode* head) {
      ListNode* prev = NULL;
      ListNode* curr = head;
      while(curr != NULL)
      {
        ListNode* currNext = curr->next; // temp = 2
        curr->next = prev; // 1->NULL
        prev = curr; // iterate to the next node. prev = 1
        curr = currNext; // iterate to the next node. curr = 2
      }
      return prev; // now prev = 5, curr = NULL
    }
};