function decodeString(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ']') {
        let encodedString = '';
        
        // Pop encoded string until an opening bracket is encountered
        while (stack[stack.length - 1] !== '[') {
          encodedString = stack.pop() + encodedString;
        }
        
        stack.pop(); // Remove the opening bracket
        
        let repeatCount = '';
        
        // Pop repetition count until a digit is encountered
        while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
          repeatCount = stack.pop() + repeatCount;
        }
        
        repeatCount = parseInt(repeatCount, 10);
        
        // Repeat the encoded string and push it back onto the stack
        encodedString = encodedString.repeat(repeatCount);
        stack.push(encodedString);
      } else {
        stack.push(s[i]);
      }
    }
    
    return stack.join('');
  }
  
  // Test case
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString); // Output: "aaabcbc"
  