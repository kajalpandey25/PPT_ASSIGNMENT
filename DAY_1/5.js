function mergeArrays(nums1, m, nums2, n) {
    let i = m - 1; // Index of last element in nums1
    let j = n - 1; // Index of last element in nums2
    let k = m + n - 1; // Index of last merged element in nums1
  
    while (i >= 0 && j >= 0) {
      // Compare the elements from the end of nums1 and nums2
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i]; // Place the larger element in the last position of nums1
        i--; // Move to the next element in nums1
      } else {
        nums1[k] = nums2[j]; // Place the larger element in the last position of nums1
        j--; // Move to the next element in nums2
      }
      k--; // Move to the next position in nums1
    }
  
    // If there are any remaining elements in nums2, copy them to nums1
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

mergeArrays(nums1, m, nums2, n);
console.log(nums1);
