const vowelName=(strname)=>{
    let  vowels=['a','e','i','o','u'];
    let count =0;
    
    for(let str of strname.toString() ){
        if(vowels.includes(str)){
            count++
        }
    }
    
    return count;
}

console.log(vowelName("my Name is Rohit Singh Vaishali. Bihar"));


// ans 12

