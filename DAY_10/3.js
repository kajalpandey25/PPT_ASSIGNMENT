// Merge Two Sorted Lists
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    mergedHead = {val: -1, next: null},
    crrt = mergedHead;

    while (list1 && list2) { 
        if (list1.val <= list2.val) {
            crrt.next = list1;
            list1 = list1.next;
        }
        else {
            crrt.next = list2;
            list2 = list2.next;
        }
        crrt = crrt.next;
    }

    crrt.next = list1 || list2;
    return mergedHead.next;
    
};