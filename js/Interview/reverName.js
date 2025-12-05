let name="Pune";
  
 let revername=name.split('').reverse().join('');
 
 console.log("revername--",revername)
 
 
 let handleReverse=(name)=>{
     
     let revName="";
    
     for(let i=name.length-1;i>=0;i--){
         revName =revName+ name[i];
     }
     return revName;
 }
 
 
 
 console.log("handleReverse--",handleReverse("Pune"));