function findAnagrams(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);
  
    // Update the pCount array with the character counts in p
    for (let i = 0; i < p.length; i++) {
      pCount[p.charCodeAt(i) - aCharCode]++;
    }
  
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      // Expand the window by incrementing the count of s[right]
      windowCount[s.charCodeAt(right) - aCharCode]++;
  
      // Shrink the window if its length is greater than p
      if (right - left + 1 > p.length) {
        windowCount[s.charCodeAt(left) - aCharCode]--;
        left++;
      }
  
      // Check if the current window is an anagram
      if (arraysAreEqual(pCount, windowCount)) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
  }
  
  // Helper function to check if two arrays are equal
  function arraysAreEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  
  console.log(indices); // Output: [0, 6]
    