function arrangeCoins(n) {
    let completeRows = 0;
    let sum = 0;
    let row = 1;
  
    while (sum + row <= n) {
      sum += row;
      row++;
      completeRows++;
    }
  
    return completeRows;
  }
  
  // Example usage
  const n = 5;
  const completeRows = arrangeCoins(n);
  console.log(completeRows);
  