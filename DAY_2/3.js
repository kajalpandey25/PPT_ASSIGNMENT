function findLHS(nums) {
    const frequency = new Map();
    let maxLen = 0;
  
    // Count the frequency of each number
    for (let num of nums) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    // Iterate through the dictionary
    for (let [num, count] of frequency.entries()) {
      // Check if complement exists
      if (frequency.has(num + 1)) {
        // Calculate the length of harmonious subsequence
        const currLen = count + frequency.get(num + 1);
        // Update maxLen if necessary
        maxLen = Math.max(maxLen, currLen);
      }
    }
  
    return maxLen;
  }
  
  // Example usage
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const longestSubsequenceLength = findLHS(nums);
  console.log(longestSubsequenceLength); // Output: 5
  
       
  