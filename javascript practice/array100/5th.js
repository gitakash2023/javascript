//  Create a function to sort an array of objects based on a specific property.
const sortedArrayOfObjectsWithSpecificProperty = (objects,property) => {
    objects.sort((a,b)=>a[property].localeCompare(b[property]))





};
const myArray = [
  {
    name: "ak",
    age: 19,
    mass: 50,
  },
  {
    name: "bk",
    age: 19,
    mass: 80,
  },
  {
    name: "ck",
    age: 20,
    mass: 60,
  },
];

sortedArrayOfObjectsWithSpecificProperty(myArray,"name")
console.log(myArray)
