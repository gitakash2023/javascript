//   create a function to Extracting Names from array of an object .
 
 
 function extractNames(people) {
    return people.map((person) => person.name);
  }
  
  const people = [
    { name: 'Akash', age: 25 },
    { name: 'Bikash', age: 27},
    { name: 'Krishna', age: 28 }
  ];
  
 
  console.log( extractNames(people )); 
  