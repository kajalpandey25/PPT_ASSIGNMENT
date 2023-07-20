// . Delete Node in a Linked List

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (node == null)
    return;
    else{
        if(node.next!= null){
            node.val = node.next.val;
            node.next = node.next.next;
        }
    }  
};


// Time Complexity = o(1)
// Space Complexity= o(1)
