//  Linked List Cycle II
Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head

    do {
        if(fast ==null || fast.next == null) return null
        slow = slow.next
        fast = fast.next.next
    }while (slow != fast)

    while(head!= slow){
        head = head.next;
        slow = slow.next
    }
    return slow   
};

// Time complexity = o(n)
// Space complexity = constant