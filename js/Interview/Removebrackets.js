const flatten = (arr) =>
    arr.reduce((acc, item) => 
      acc.concat(Array.isArray(item) ? flatten(item) : item), 
    []);
  
  console.log(flatten([1, 2, [3, 5], [6]]));



  const  handleName=(num)=>{


    let uniqueNum=num.flat(Infinity);
   
   return uniqueNum;
   
   
 }
 
 console.log("handleName---",handleName(([1, [2, [3]]])))