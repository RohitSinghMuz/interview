maxNum



const largetNum=(numData)=>{
  let largeNum=0;
  for(let num=0;num<numData.length;num++){
      if(numData[num]>largeNum){
      largeNum=numData[num];
      }
  }
    return  largeNum;
}

console.log(largetNum([1,2,3,4,56,78,9]))