let handleParent= {
    name:"Rohit singh",
  
    details:function (str1){
      console.log("Name-----",this.name, str1);
    }
  }
  
  const nameData = () => {
    return { name: "Mohan Reddy" };
  }
  
  handleParent.details.call(nameData(), "India");
  
  
  handleParent.details.apply(nameData(), ["India"]);
  
  
  let bindData=handleParent.details.bind(nameData(), "India");
  bindData();