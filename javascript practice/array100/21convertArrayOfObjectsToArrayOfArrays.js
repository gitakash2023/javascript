// . Create a function to convert an array of objects to an array of arrays representing key-value pairs.
const convertArrayOfObjectsToArrayOfArrays = (arr) => {
    return arr.map(obj => Object.entries(obj));
  };
  const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Mike', age: 35 },
  ];
  
  const arrayOfArrays = convertArrayOfObjectsToArrayOfArrays(people);
  console.log(arrayOfArrays);
  