const handleAnagrams=(name1,name2)=>{

    let sortName1=name1.split('').sort().join('');
    let sortName2=name2.split('').sort().join('');
 
       return sortName1===sortName2;
}



console.log(handleAnagrams("anam","maan"));
