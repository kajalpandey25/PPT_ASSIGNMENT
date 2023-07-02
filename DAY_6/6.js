function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const countMap = new Map();
    const original = [];
  
    // Count the occurrences of each number in changed
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    // Iterate through changed to reconstruct original array
    for (const num of changed) {
      if (countMap.get(num) === 0) {
        continue; // Skip if num is already used in original array
      }
  
      const doubledNum = num * 2;
      const countOfDoubledNum = countMap.get(doubledNum) || 0;
  
      if (countOfDoubledNum === 0) {
        return []; // If doubledNum doesn't exist, return empty array
      }
  
      original.push(num);
      countMap.set(num, countMap.get(num) - 1);
      countMap.set(doubledNum, countMap.get(doubledNum) - 1);
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const originalArray = findOriginalArray(changed);
  console.log(originalArray); // [1, 3, 4]
  