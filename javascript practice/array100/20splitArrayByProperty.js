// Create a function to split an array of objects
// into multiple arrays based on a specific property value.
const splitArrayByProperty = (arr, property) => {
  const result = {};

  for (const obj of arr) {
    const propValue = obj[property];

    if (!(propValue in result)) {
      result[propValue] = [];
    }

    result[propValue].push(obj);
  }

  return Object.values(result);
};
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 25 },
  { name: "Emily", age: 30 },
  { name: "Sam", age: 25 },
];
console.log(splitArrayByProperty(people, "age"));
