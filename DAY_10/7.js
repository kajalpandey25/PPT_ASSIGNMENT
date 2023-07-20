// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
// After doing so, return the head of the final linked list.  You may return any such answer.
// (Note that in the examples below, all sequences are serializations of ListNode objects.)
// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.


// Definition for singly-linked list node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to remove consecutive sequences of nodes that sum to 0
function removeZeroSumSublists(head) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let sum = 0;
    let nodeMap = {};
    let current = dummy;

    while (current) {
        sum += current.val;

        if (sum in nodeMap) {
            // Remove the nodes between nodeMap[sum] and the current node
            let prev = nodeMap[sum].next;
            let removeSum = sum + prev.val;
            while (prev !== current) {
                removeSum += prev.next.val;
                delete nodeMap[removeSum];
                prev = prev.next;
            }
            nodeMap[sum].next = current.next;
        } else {
            nodeMap[sum] = current;
        }

        current = current.next;
    }

    return dummy.next;
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
const input = [1, 2, -3, 3, 1];
const head = createLinkedListFromArray(input);
const resultHead = removeZeroSumSublists(head);
const output = convertLinkedListToArray(resultHead);
console.log(output); // Output: [3, 1] or [1, 2, 1] or any other valid answer
