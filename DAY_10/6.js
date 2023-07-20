// Given a singly linked list of size N. The task is to left-shift the linked list by k nodes, where k is a given positive integer smaller than or equal to the length of the linked list.
// Input: N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
// Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

// Definition for singly-linked list node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to left-shift the linked list by k nodes
function leftShiftLinkedList(head, k) {
    if (!head || k === 0) {
        return head;
    }

    // Find the length of the linked list
    let length = 1;
    let current = head;
    while (current.next) {
        length++;
        current = current.next;
    }

    // Check if k is greater than the length of the linked list
    k = k % length;

    // No need to shift if k is 0
    if (k === 0) {
        return head;
    }

    // Find the new head and tail after the left shift
    let newHead;
    let tail;
    let count = 1;
    current = head;

    while (count < length - k) {
        current = current.next;
        count++;
    }

    newHead = current.next;
    tail = current;
    current.next = null;

    // Update the next pointers
    current = newHead;
    while (current.next) {
        current = current.next;
    }

    current.next = head;
    return newHead;
}

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Create the linked list
const values = [2, 4, 7, 8, 9];
let head = null;
let tail = null;

for (let value of values) {
    const newNode = new Node(value);
    if (!head) {
        head = newNode;
        tail = newNode;
    } else {
        tail.next = newNode;
        tail = newNode;
    }
}

// Left shift the linked list by k=3 nodes
const k = 3;
head = leftShiftLinkedList(head, k);

// Print the result
printLinkedList(head);

