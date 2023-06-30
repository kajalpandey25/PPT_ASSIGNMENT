function countCompleteRows(n) {
    let completeRows = 0;
    let coinsUsed = 0;
  
    for (let i = 1; coinsUsed + i <= n; i++) {
      completeRows++;
      coinsUsed += i;
    }
  
    return completeRows;
  }
  
  // Test example
  console.log(countCompleteRows(5)); // Output: 2
  