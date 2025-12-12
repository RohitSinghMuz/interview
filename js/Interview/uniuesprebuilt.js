const handleRemovedDublicate=(arrayData)=>{
    return [...new Set(arrayData)];
}
console.log(handleRemovedDublicate([1,2,1,1,1,2,2]));




const handleRemovedDublicateusingMethod=(arrayData)=>{
    const uniqueElement =arrayData.filter((item,index,arrData)=>arrData.indexOf(item)==index);
    return uniqueElement
  }

  console.log(handleRemovedDublicateusingMethod([1,2,1,1,1,2,2,4]));