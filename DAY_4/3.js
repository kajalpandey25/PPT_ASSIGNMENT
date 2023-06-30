function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    
    const transposedMatrix = Array(cols)
      .fill(null)
      .map(() => Array(rows));
  
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  // Example usage
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const transposed = transposeMatrix(matrix);
  console.log(transposed);
  