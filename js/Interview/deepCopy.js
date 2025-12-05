const obj = {
    age: 25,
    address: {
       city: 'Pune',
    }
  }
  const newObj = JSON.parse(JSON.stringify( obj));
  newObj.age = 28;
  newObj.address.city = "Jaipur";
  newObj.name = 'Rohit';
  
  console.log("obj--",obj);
  
  
  console.log("newObj--",newObj);