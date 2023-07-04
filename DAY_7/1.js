function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    
    const map = new Map();
    const mappedChars = new Set();
    
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
      
      if (map.has(charS)) {
        if (map.get(charS) !== charT) {
          return false;
        }
      } else {
        if (mappedChars.has(charT)) {
          return false;
        }
        map.set(charS, charT);
        mappedChars.add(charT);
      }
    }
    
    return true;
  }
  
  // Testing the function
  const s = "egg";
  const t = "add";
  console.log(isIsomorphic(s, t)); // Output: true
  