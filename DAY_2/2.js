function maxCandies(candyType) {
    const uniqueCandyTypes = new Set(candyType);
    const maxCandyTypes = Math.min(candyType.length / 2, uniqueCandyTypes.size);
    return maxCandyTypes;
  }
  
  // Example usage:
  const candyType = [1, 1, 2, 2, 3, 3];
  const maxTypes = maxCandies(candyType);
  console.log(maxTypes); // Output: 3
  