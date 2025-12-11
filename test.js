const test = (func,delay) => {

    let timer
    return (...args)=>{
        clearTimeout(timer)
      timer=setTimeout(()=>func(...args),delay)
    }
  
};


  const handleValue = (value) => {
    console.log('value-----', value);

    return value;
  };

  const handleDebounce = debounce(handleValue, 1000);

  handleDebounce('Rohit Singh');

