// Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element). 
// Input: A[]={3, 3, 4, 2, 4, 4, 2, 4, 4}
// Output: 4
// Explanation: The frequency of 4 is 5 which is greater than half of the size of the array size. 


function findMajorityElement(nums) {
    let candidate = nums[0];
    let count = 1;
  
    // Find potential candidate
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === candidate) {
        count++;
      } else {
        count--;
        if (count === 0) {
          candidate = nums[i];
          count = 1;
        }
      }
    }
  
    // Count occurrences of candidate element
    count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === candidate) {
        count++;
      }
    }
  
    // Check if candidate is the majority element
    if (count > nums.length / 2) {
      return candidate;
    }
  
    return null;
  }
  
  // Example usage:
  const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
  const majorityElement = findMajorityElement(nums);
  console.log(majorityElement); // Output: 4
  