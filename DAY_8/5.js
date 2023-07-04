function compress(chars) {
    let read = 1; // Pointer for reading the characters
    let write = 0; // Pointer for writing the compressed characters
    let count = 1; // Count of consecutive repeating characters
  
    for (; read < chars.length; read++) {
      if (chars[read] === chars[read - 1]) {
        count++;
      } else {
        chars[write++] = chars[read - 1]; // Write the character
        if (count > 1) {
          // Write the count as a string, splitting into multiple digits if necessary
          const countStr = count.toString();
          for (let i = 0; i < countStr.length; i++) {
            chars[write++] = countStr[i];
          }
        }
        count = 1; // Reset count for the new character
      }
    }
  
    // Write the last character and its count
    chars[write++] = chars[read - 1];
    if (count > 1) {
      const countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[write++] = countStr[i];
      }
    }
  
    return write; // Return the new length of the array
  }
  const chars = ["a","a","b","b","c","c","c"];
  const compressedLength = compress(chars);
  const compressedArray = chars.slice(0, compressedLength);
  
  console.log(compressedLength); // Output: 6
  console.log(compressedArray);  // Output: ["a", "2", "b", "2", "c", "3"]
    