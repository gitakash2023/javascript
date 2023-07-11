// Create a function to check if all objects in an array have a specific property.
const checkAllObjectsHaveProperty = (arr, property) => {
  return arr.every((obj) => property in obj);
};
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike" },
];

console.log(checkAllObjectsHaveProperty(people, "name")); 
console.log(checkAllObjectsHaveProperty(people, "age")); 
console.log(checkAllObjectsHaveProperty(people, "email"));
