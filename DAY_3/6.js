function findSingleNumber(nums) {
    let result = 0;
    
    for (let num of nums) {
      result ^= num;
    }
    
    return result;
  }
  
  // Example usage
  const nums = [2, 2, 1];
  const singleNumber = findSingleNumber(nums);
  console.log(singleNumber); // Output: 1
  