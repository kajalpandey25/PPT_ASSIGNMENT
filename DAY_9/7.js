// Given an array of integers, find the inversion of an array. Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
// N=5, arr[] = {2, 4, 1, 3, 5}
// Output: 3
// Explanation: (2,1) (4,1) and (4,3) forms an inversion in an array


function findInversions(arr) {
    let count = 0;
  
    // Merge sort with inversion count
    function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
  
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
  
      return merge(left, right);
    }
  
    function merge(left, right) {
      let result = [];
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
          count += left.length - i; // Increment inversion count
        }
      }
  
      // Concatenate remaining elements
      result = result.concat(left.slice(i)).concat(right.slice(j));
      return result;
    }
  
    mergeSort(arr);
  
    return count;
  }
  
  // Example usage
  const arr = [2, 4, 1, 3, 5];
  const inversionCount = findInversions(arr);
  console.log(inversionCount); // Output: 3
  