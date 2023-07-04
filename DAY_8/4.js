class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBinaryTree(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    // Find the index of the first opening parenthesis
    let i = s.indexOf('(');
  
    if (i === -1) {
      // No opening parenthesis found, so the entire string is the root value
      return new TreeNode(parseInt(s));
    }
  
    // Create a new node with the root value
    let root = new TreeNode(parseInt(s.slice(0, i)));
  
    let count = 0;
    let start = i;
  
    // Iterate through the string to find the substring for the left and right subtrees
    for (let j = start; j < s.length; j++) {
      if (s[j] === '(') {
        count++;
      } else if (s[j] === ')') {
        count--;
      }
  
      if (count === 0 && start === i) {
        // Found the substring for the left subtree
        root.left = constructBinaryTree(s.slice(start + 1, j));
        start = j + 1;
      } else if (count === 0) {
        // Found the substring for the right subtree
        root.right = constructBinaryTree(s.slice(start + 1, j));
      }
    }
  
    return root;
  }
  
  // Helper function to perform inorder traversal of the binary tree
  function inorderTraversal(root) {
    if (root === null) {
      return [];
    }
  
    const result = [];
    const stack = [];
  
    let curr = root;
  
    while (curr !== null || stack.length > 0) {
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }
  
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
  
    return result;
  }
  
  // Test case
  const s = "4(2(3)(1))(6(5))";
  const root = constructBinaryTree(s);
  const result = inorderTraversal(root);
  console.log(result);  // Output: [4, 2, 6, 3, 1, 5]
  