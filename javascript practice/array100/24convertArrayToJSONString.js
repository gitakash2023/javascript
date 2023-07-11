//  Create a function to convert an array of objects to a JSON string.
const convertArrayToJSONString = (arr) => {
    return JSON.stringify(arr);
  };
  const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Mike', age: 35 },
  ];
  
  const jsonString = convertArrayToJSONString(people);
  console.log(jsonString);
  