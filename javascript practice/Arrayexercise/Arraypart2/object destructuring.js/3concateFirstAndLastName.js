const data = [
    { id: 1, firstName: 'Akash', lastName: 'Kumar' },
    { id: 2, firstName: 'kk', lastName: 'Krishna' }
  ];
  
  const updatedData = data.map(({ firstName, lastName }) => ({ name: `${firstName} ${lastName}` }));
  console.log(updatedData);
 
  