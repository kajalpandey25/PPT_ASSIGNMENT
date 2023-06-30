function maxCount(m, n, ops) {
    if (ops.length === 0) {
      return m * n; 
    }
    
    let minRow = m;
    let minCol = n;
    
    for (let i = 0; i < ops.length; i++) {
      minRow = Math.min(minRow, ops[i][0]);
      minCol = Math.min(minCol, ops[i][1]);
    }
    
    return minRow * minCol; 
  }
  
  // Example usage
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const result = maxCount(m, n, ops);
  console.log(result); 
  