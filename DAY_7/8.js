function checkStraightLine(coordinates) {
    // Calculate the slope between the first two points
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = (y1 - y0) / (x1 - x0);
  
    // Check if the remaining points have the same slope
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      const slope = (y - y0) / (x - x0);
      if (slope !== initialSlope) {
        return false; // Not a straight line
      }
    }
  
    return true; // All points lie on the same line
  }
  
  // Example usage:
  const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
  const result = checkStraightLine(coordinates);
  console.log(result); // Output: true
  