/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * O(n) time, O(1) space
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if (head != NULL && head->next != NULL)
        {
            ListNode *temp = head->next; // temp = 2
            head->next = swapPairs(head->next->next); // 1->3
            temp->next = head; // 2->1
            head = temp; // head = 2
        }
        return head;
    }
};