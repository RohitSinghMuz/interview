function maxCharCount(str) {
    const freq = {};
    
    // Count frequency of each character
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
  
    // Find max count and character
    let maxChar = '';
    let maxCount = 0;
  
    for (let char in freq) {
      if (freq[char] > maxCount) {
        maxChar = char;
        maxCount = freq[char];
      }
    }
  
    return { maxChar, maxCount };
  }
  
  // Example
  console.log(maxCharCount("javascript"));
