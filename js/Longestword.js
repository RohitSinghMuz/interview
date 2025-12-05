const handleLongWord=(sentence)=>{
    let splitSentence=sentence.split(' ');
    console.log("splitSentence",splitSentence)
    let longWord=" ";
     for(word of splitSentence){
         if(word.length>longWord.length){
             longWord=word;
         }
     }
    
    return longWord;
    
}


console.log("handleLongWord--",handleLongWord('pune Mumbai '));


