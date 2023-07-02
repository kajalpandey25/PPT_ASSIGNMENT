function reconstructPermutation(s) {
    const n = s.length;
    const perm = [];
    let low = 0;
    let high = n;
  
    for (let i = 0; i <= n; i++) {
      if (i === n || s[i] === 'I') {
        for (let j = i; j >= low; j--) {
          perm.push(high);
          high--;
        }
        low = i + 1;
      } else {
        high--;
      }
    }
  
    return perm;
  }
  
  // Test the function
  const s = "IDID";
  const permutation = reconstructPermutation(s);
  console.log(permutation);
  