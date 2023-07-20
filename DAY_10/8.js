// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]


// Definition for singly-linked list node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to reorder the linked list
function reorderLinkedList(head) {
    if (!head || !head.next || !head.next.next) {
        return head;
    }

    let oddHead = head;
    let evenHead = head.next;
    let oddTail = oddHead;
    let evenTail = evenHead;

    let current = evenHead.next;
    let isOdd = true;

    while (current) {
        if (isOdd) {
            oddTail.next = current;
            oddTail = current;
        } else {
            evenTail.next = current;
            evenTail = current;
        }

        current = current.next;
        isOdd = !isOdd;
    }

    // Terminate both lists
    oddTail.next = null;
    evenTail.next = null;

    // Merge the two lists
    oddTail.next = evenHead;

    return oddHead;
}

// Helper function to create a linked list from an array
function createLinkedListFromArray(arr) {
    let head = null;
    let tail = null;

    for (let val of arr) {
        const newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    return head;
}

// Helper function to convert a linked list to an array
function convertLinkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test the function with the given input
const input = [1, 2, 3, 4, 5];
const head = createLinkedListFromArray(input);
const resultHead = reorderLinkedList(head);
const output = convertLinkedListToArray(resultHead);
console.log(output); // Output: [1, 3, 5, 2, 4]
