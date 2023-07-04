function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
  
    // Create a 2D array to store the minimum ASCII sum
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1);
    }
  
    // Initialize the base cases
    dp[0][0] = 0;
    for (let i = 1; i <= m; i++) {
      dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    for (let j = 1; j <= n; j++) {
      dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }
  
    // Calculate the minimum ASCII sum
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + s1.charCodeAt(i - 1),
            dp[i][j - 1] + s2.charCodeAt(j - 1)
          );
        }
      }
    }
  
    return dp[m][n];
  }
  
  // Example usage
  const s1 = "sea";
  const s2 = "eat";
  const result = minimumDeleteSum(s1, s2);
  console.log(result); // Output: 231
  