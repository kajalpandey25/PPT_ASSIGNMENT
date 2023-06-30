function sortedSquares(nums) {
    const squaredNums = nums.map(num => num * num);
    squaredNums.sort((a, b) => a - b);
    return squaredNums;
  }
  
  // Example usage
  const nums = [-4, -1, 0, 3, 10];
  const squaredSorted = sortedSquares(nums);
  console.log(squaredSorted);
  