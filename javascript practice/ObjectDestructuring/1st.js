const person = {
    name: 'Akash',
    age: 25,
    address: {
      street: 'Ralpur Road',
      city: 'Raebareli',
      country: 'India'
    }
  };
  
  // Destructuring nested objects
  const { name, address: { city, country } } = person;
  
  console.log(name);   // Output:Akash
  console.log(city);   // Output: Raebareli
  console.log(country);// Output: India
  