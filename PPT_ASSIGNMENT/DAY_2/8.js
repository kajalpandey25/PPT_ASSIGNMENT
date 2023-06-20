function minimumScore(nums, k) {
    let minNum = Infinity;
    let maxNum = -Infinity;
  
    for (let num of nums) {
      minNum = Math.min(minNum, num);
      maxNum = Math.max(maxNum, num);
    }
  
    if (maxNum - minNum <= 2 * k) {
      return 0;
    }
  
    const potentialMin = minNum + k;
    const potentialMax = maxNum - k;
  
    const potentialScore = potentialMax - potentialMin;
    const currentScore = maxNum - minNum;
  
    return Math.min(potentialScore, currentScore);
  }
  
  // Example usage:
  const nums = [1];
  const k = 0;
  console.log(minimumScore(nums, k)); // Output: 0
  