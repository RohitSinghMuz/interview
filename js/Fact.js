const factorial=(factNum)=>{
    if(factNum===0){
        return 1;
    }
    let fact=1;
    for(let i=1;i<=factNum;i++){
        fact=fact*i;
    }
    return fact;
}






console.log("factorial---",factorial(6))
factorial