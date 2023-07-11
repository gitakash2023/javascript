
const data = [
    { id: 1, name: 'John', address: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Jane', address: { city: 'London', country: 'UK' } }
  ];
  
  const city=data.map(({address:{city}})=>city);
  console.log(city);
  const country= data.map(({address:{country}})=>country)
  console.log(country);