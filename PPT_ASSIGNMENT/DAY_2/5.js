function maximumProduct(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
  
    const n = nums.length;
  
    // Compare the product of the two smallest numbers and the largest number
    const option1 = nums[0] * nums[1] * nums[n - 1];
  
    // Compare the product of the three largest numbers
    const option2 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  
    // Return the maximum of the two options
    return Math.max(option1, option2);
  }
  
  // Test case
  const nums = [1, 2, 3];
  const result = maximumProduct(nums);
  console.log(result); // Output: 6
  