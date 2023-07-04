function reverseString(s, k) {
    const arr = s.split('');
    
    for (let i = 0; i < arr.length; i += 2 * k) {
      let left = i;
      let right = Math.min(i + k - 1, arr.length - 1);
      
      while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }
    
    return arr.join('');
  }
  
  // Test example
  const s = "abcdefg";
  const k = 2;
  const result = reverseString(s, k);
  console.log(result);
  