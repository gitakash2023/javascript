// Create a function to check if all objects in an array have the same value for a specific property.
const checkSamePropertyValue = (arr, property) => {
    return arr.every(obj => obj[property] === arr[0][property]);
  };
  const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 25 },
    { name: 'Mike', age: 25 },
  ];
  
  const sameAge = checkSamePropertyValue(people, 'age');
  console.log(sameAge); 
  
  const sameName = checkSamePropertyValue(people, 'name');
  console.log(sameName); 
  
  