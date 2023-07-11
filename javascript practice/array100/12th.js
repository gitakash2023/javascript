//  Create a function to extract specific properties from an array of objects
// and create a new array.
const extractSpecificPropertyFromAnArrayOfObjects = (arr, property) => {
  return arr.map((obj) => obj[property]);
};
const myArray = [
  {
    name: "ckkk",
    age: 17,
    mass: 50,
  },
  {
    name: "bk",
    age: 19,
    mass: 80,
  },
];
console.log(extractSpecificPropertyFromAnArrayOfObjects(myArray, "name"));
