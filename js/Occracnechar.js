const  countChar=(sentence)=>{
   
    let eachChar={};
    for( let cval of sentence ){
      eachChar[cval]=(eachChar[cval]||0)+1;
    }
     return eachChar;
     
   }
   
   
   
   console.log("handleName---",countChar("banana"));
 handleName--- { b: 1, a: 3, n: 2 }