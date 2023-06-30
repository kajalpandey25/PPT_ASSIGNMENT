function construct2DArray(original, m, n) {
    if (m * n !== original.length) {
      return []; 
    }
  
    const result = [];
    for (let i = 0; i < m; i++) {
      const row = original.slice(i * n, (i * n) + n);
      result.push(row);
    }
  
    return result;
  }
  
  const original = [1, 2, 3, 4];
  const m = 2;
  const n = 2;
  
  const constructedArray = construct2DArray(original, m, n);
  console.log(constructedArray);
  