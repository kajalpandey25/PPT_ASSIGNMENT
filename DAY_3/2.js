function fourSum(nums, target) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort the array in ascending order
  
    for (let i = 0; i < nums.length - 3; i++) {
      // Skip duplicates
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      for (let j = i + 1; j < nums.length - 2; j++) {
        // Skip duplicates
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue;
        }
  
        let left = j + 1;
        let right = nums.length - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            results.push([nums[i], nums[j], nums[left], nums[right]]);
  
            // Skip duplicates
            while (left < right && nums[left] === nums[left + 1]) {
              left++;
            }
            while (left < right && nums[right] === nums[right - 1]) {
              right--;
            }
  
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return results;
  }
  
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result);
  