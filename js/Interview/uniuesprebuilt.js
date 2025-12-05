const handleRemovedDublicate=(arrayData)=>{
    
    return [...new Set(arrayData)];
}



console.log(handleRemovedDublicate([1,2,1,1,1,2,2]));