function backspaceCompare(s, t) {
    // Function to process the string and return the final result
    function processString(str) {
      const result = [];
      for (let char of str) {
        if (char === '#') {
          result.pop(); // Remove the last character
        } else {
          result.push(char); // Add the character to the result
        }
      }
      return result.join(''); // Convert the array back to a string
    }
  
    // Process both strings and compare the results
    return processString(s) === processString(t);
  }
  
  // Example usage:
  const s = "ab#c";
  const t = "ad#c";
  const result = backspaceCompare(s, t);
  console.log(result); // Output: true
  