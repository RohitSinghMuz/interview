palindrome

const handlePlaindrome=(word)=>{
    
    const reverseWord=word.split(' ').reverse().join('');
    return  word ===reverseWord
}




console.log(handlePlaindrome("aba"))