function isValidString(s) {
    let stack = [];
    let starStack = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(i);
      } else if (s[i] === '*') {
        starStack.push(i);
      } else {
        if (stack.length > 0) {
          stack.pop();
        } else if (starStack.length > 0) {
          starStack.pop();
        } else {
          return false;
        }
      }
    }
  
    while (stack.length > 0 && starStack.length > 0) {
      if (stack[stack.length - 1] < starStack[starStack.length - 1]) {
        stack.pop();
        starStack.pop();
      } else {
        return false;
      }
    }
  
    return stack.length === 0;
  }
  
  // Test cases
  console.log(isValidString("()"));  // true
  console.log(isValidString("(*)"));  // true
  console.log(isValidString("(*))"));  // true
  console.log(isValidString("((*"));  // false
  console.log(isValidString("((*)"));  // true
  console.log(isValidString(")"));  // false
  console.log(isValidString("((*))"));  // true
  