function generateSpiralMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push([]);
    }
  
    let topRow = 0;
    let bottomRow = n - 1;
    let leftColumn = 0;
    let rightColumn = n - 1;
    let counter = 1;
  
    while (topRow <= bottomRow && leftColumn <= rightColumn) {
      
      for (let col = leftColumn; col <= rightColumn; col++) {
        matrix[topRow][col] = counter++;
      }
      topRow++;

      for (let row = topRow; row <= bottomRow; row++) {
        matrix[row][rightColumn] = counter++;
      }
      rightColumn--;
  
     
      if (topRow <= bottomRow) {
        for (let col = rightColumn; col >= leftColumn; col--) {
          matrix[bottomRow][col] = counter++;
        }
        bottomRow--;
      }
  
     
      if (leftColumn <= rightColumn) {
        for (let row = bottomRow; row >= topRow; row--) {
          matrix[row][leftColumn] = counter++;
        }
        leftColumn++;
      }
    }
  
    return matrix;
  }
  
  // Test
  let n = 3;
  let spiralMatrix = generateSpiralMatrix(n);
  console.log(spiralMatrix);
  