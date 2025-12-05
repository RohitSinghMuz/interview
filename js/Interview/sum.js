const handleSum = (arr) => {
    return arr.reduce((sum, val) => {
      const num = Number(val);
      return !isNaN(num) ? sum + num : sum;
    }, 0);
  };
  
  console.log("handleSum---", handleSum([26, 42, 57, 68, '21', 101, '55', 94, 88, '49', null, undefined]));
  
  
  
  
  