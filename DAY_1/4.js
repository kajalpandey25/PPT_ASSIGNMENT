function plusOne(digits) {
    const n = digits.length;
    
    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit
      digits[i]++;
      
      // Check if there's a carry
      if (digits[i] < 10) {
        // No carry, we're done
        return digits;
      }
      
      // Carry occurred, set current digit to 0
      digits[i] = 0;
    }
    
    // If we reach here, it means there's a carry after incrementing the leftmost digit
    digits.unshift(1);
    return digits;
  }
  
  // Example usage:
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result);
  