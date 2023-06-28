function incrementLargeInteger(digits) {
    const n = digits.length;
    
    // Start from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit by one
      digits[i]++;
      
      // If the digit becomes 10, set it to 0 and carry the 1 to the next digit
      if (digits[i] === 10) {
        digits[i] = 0;
      } else {
        // No carry required, return the incremented array
        return digits;
      }
    }
    
    // If we reach this point, it means all digits were 9 and carried to the leftmost digit
    // In this case, insert a new digit at the beginning of the array with a value of 1
    digits.unshift(1);
    
    return digits;
  }
  
  // Example usage
  const digits = [1, 2, 3];
  const result = incrementLargeInteger(digits);
  console.log(result); // Output: [1, 2, 4]

  