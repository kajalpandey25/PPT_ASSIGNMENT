function containsDuplicate(nums) {
    const numSet = new Set();
  
    for (let num of nums) {
      if (numSet.has(num)) {
        return true; // Found a duplicate
      }
  
      numSet.add(num);
    }
  
    return false; // No duplicates found
  }
  
  // Example usage:
  const nums = [1, 2, 3, 1];
  console.log(containsDuplicate(nums)); // Output: true
  