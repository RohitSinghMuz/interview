const obj = {
    age: 25,
    address: {
       city: 'Pune',
    }
  }
  const newObj = obj;
  newObj.age = 28;
  newObj.address.city = "Jaipur";
  newObj.name = 'Rohit';
  
  console.log("obj--",obj);
  
  
  console.log("newObj--",newObj);
  
  
//   obj-- { age: 28, address: { city: 'Jaipur' }, name: 'Rohit' }
//   newObj-- { age: 28, address: { city: 'Jaipur' }, name: 'Rohit' }
   