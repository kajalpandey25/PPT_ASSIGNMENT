function findMissingRanges(nums, lower, upper) {
    const result = [];
  
    // Helper function to add a range to the result list
    const addRange = (start, end) => {
      if (start === end) {
        result.push(start.toString());
      } else {
        result.push(start + "->" + end);
      }
    };
  
    // Check if the first missing number is greater than 'lower'
    if (nums[0] > lower) {
      addRange(lower, nums[0] - 1);
    }
  
    // Iterate over the numbers and find missing ranges
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] > 1) {
        addRange(nums[i - 1] + 1, nums[i] - 1);
      }
    }
  
    // Check if the last missing number is less than 'upper'
    if (nums[nums.length - 1] < upper) {
      addRange(nums[nums.length - 1] + 1, upper);
    }
  
    // Return the result list
    return result;
  }
  
  // Example usage:
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const missingRanges = findMissingRanges(nums, lower, upper);
  console.log(missingRanges);
  