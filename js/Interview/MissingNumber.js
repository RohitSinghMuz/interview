function missing(...arr) {
    let maxNum=Math.max(...arr);
     let minNum=Math.min(...arr);
     let missingNum=[];
    
    for(let i=minNum;i<=maxNum;i++){
      if(!arr.includes(i)){
      missingNum.push(i);
      }
    }
    
    
    return missingNum.join(' ');
   }
   
   
   console.log("handleFibonics----",missing(1,9,15));