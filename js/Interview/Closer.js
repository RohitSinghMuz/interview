const outerfun=()=>{
  
  
    let name="Rohit Singh";
      
      function innerFunction(){
          let Dist="Vaishali";
          
          console.log("name---Dist",name,Dist)
        
      }
      return innerFunction;
  }
  
  const closeVal=outerfun();
  
  closeVal();