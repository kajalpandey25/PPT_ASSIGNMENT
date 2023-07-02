function findMaxLength(nums) {
    const countMap = new Map();
    countMap.set(0, -1); 
    let maxLength = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      count += nums[i] === 0 ? -1 : 1;
  
      if (countMap.has(count)) {
        // A subarray with equal 0s and 1s is found
        maxLength = Math.max(maxLength, i - countMap.get(count));
      } else {
        // Store the count at the first occurrence
        countMap.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength); // 2
  