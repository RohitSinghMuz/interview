const display=(x,y ,operation)=>{
    let result =operation(x,y);
    console.log("result----",result);
    }
    
    const add=(x,y)=>{
        return x+y;
    }
    const sub=(x,y)=>{
        return x-y;
    }
    
    display(4,5,add)
    display(4,5,sub)
  