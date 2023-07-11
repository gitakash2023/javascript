// Create a function to convert an array of objects to an object with
//  properties based on a specific property value.
const convertArrayOfObjectToObject = (arr, property) => {
  const object = {};
  arr.forEach((obj) => {
    const propertyValue = obj[property];
    object[propertyValue] = obj;
  });
  return object;
};
const myArr = [
  {
    id: 1,
    name: "akash",
    age: 26,
  },
  {
    id: 2,
    name: "bikash",
    age: 28,
  },
  {
    id: 3,
    name: "MP",
    age: 48,
  },
];
console.log(convertArrayOfObjectToObject(myArr, "id"));
