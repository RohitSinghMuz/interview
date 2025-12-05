const handleDebounce=(func, delay)=>{
  
    let timer;
    
    return(...args)=>{
      clearTimeout(timer)
      timer=setTimeout(()=>func(...args) ,delay);
      
    }
    
    
  }
  
  
  const handledeval=(value)=>{
    
    console.log("value-----",value)
    
  }
  
  
  
  const debounceValue = handleDebounce(handledeval,1000);
  
  
  debounceValue('Ro');
  
  debounceValue('Rohit');
  
  debounceValue('Rohit Singh');