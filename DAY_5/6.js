function findDuplicates(nums) {
    const duplicates = [];
    
    for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;
      
      if (nums[index] < 0) {
        duplicates.push(Math.abs(nums[i]));
      } else {
        nums[index] = -nums[index];
      }
    }
    
    return duplicates;
  }
  
  // Example usage:
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
  const result = findDuplicates(nums);
  console.log(result); // Output: [2, 3]
  