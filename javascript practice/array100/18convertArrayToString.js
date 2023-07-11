//  Create a function to convert an array of objects to a
//  comma-separated string of specific property values
const convertArrayToString = (arr, propName) => {
  const propertyValues = arr.map((obj) => obj[propName]);
  const commaSeparatedString = propertyValues.join(", ");
  return commaSeparatedString;
};
const myArray = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
  ];
  console.log(convertArrayToString(myArray, 'name'));
  
