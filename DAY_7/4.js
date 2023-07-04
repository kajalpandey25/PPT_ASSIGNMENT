function reverseWords(s) {
    const words = s.split(' ');
  
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage
  const s = "Let's take LeetCode contest";
  const reversed = reverseWords(s);
  console.log(reversed);
  