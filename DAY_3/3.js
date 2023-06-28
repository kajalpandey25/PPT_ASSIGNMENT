function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;
  
    // Find the first pair from the right where nums[i] < nums[i+1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = n - 1;
  
      // Find the first element greater than nums[i]
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
  
      swap(nums, i, j);
    }
  
    reverse(nums, i + 1);
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start) {
    let i = start;
    let j = nums.length - 1;
  
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
  }
  
  // Example usage:
  const nums = [1, 2, 3];
  nextPermutation(nums);
  console.log(nums);
  