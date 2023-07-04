function canShiftString(s, goal) {
    if (s.length !== goal.length) {
      return false; 
    }
  
    const doubleS = s + s; 
  
    return doubleS.includes(goal); 
  }
  const s = "abcde";
  const goal = "cdeab";
  console.log(canShiftString(s, goal)); // Output: true
    