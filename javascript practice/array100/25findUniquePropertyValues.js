// . Create a function to find the unique values of a specific property in an array of objects.
const findUniquePropertyValues = (arr, property) => {
  const newArr = arr.map((obj) => obj[property]);
  const uniqueValues = [...new Set(newArr)];
  return uniqueValues;
};
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 35 },
  { name: "Jane", age: 40 },
];
console.log(findUniquePropertyValues(people, "age"));
