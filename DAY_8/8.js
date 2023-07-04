function canAchieveGoal(s, goal) {
    const n = s.length;
    let diffCount = 0;
    let diffIndices = [];
    
    for (let i = 0; i < n; i++) {
      if (s[i] !== goal[i]) {
        diffCount++;
        diffIndices.push(i);
      }
      
      if (diffCount > 2) {
        return false; // More than 2 differences, cannot achieve goal
      }
    }
    
    if (diffCount === 0) {
      return false; // No differences, already equal to goal
    }
    
    return (
      diffCount === 2 &&
      s[diffIndices[0]] === goal[diffIndices[1]] &&
      s[diffIndices[1]] === goal[diffIndices[0]]
    );
  }
  
  // Test case
  const s = "ab";
  const goal = "ba";
  const result = canAchieveGoal(s, goal);
  console.log(result); // Output: true
  