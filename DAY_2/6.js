function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid; // target found at index mid
      } else if (nums[mid] < target) {
        left = mid + 1; // target may be in the right half
      } else {
        right = mid - 1; // target may be in the left half
      }
    }
  
    return -1; // target not found
  }
  
  // Example usage:
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  
  const result = search(nums, target);
  console.log(result); // Output: 4
  