function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      // If the changed array has odd length, it can't be a doubled array
      return [];
    }
  
    const numCount = new Map();
  
    // Count occurrences of each number in the changed array
    for (const num of changed) {
      numCount.set(num, (numCount.get(num) || 0) + 1);
    }
  
    const original = [];
  
    // Iterate through the changed array
    for (const num of changed) {
      if (numCount.get(num) > 0 && numCount.get(num / 2) > 0) {
        // If num/2 exists and its count is greater than 0
        numCount.set(num, numCount.get(num) - 1); // Decrement count of num/2
        numCount.set(num / 2, numCount.get(num / 2) - 1); // Decrement count of num
        original.push(num / 2); // Append num/2 to the original array
      } else {
        // changed is not a doubled array
        return [];
      }
    }
  
    return original;
  }
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);