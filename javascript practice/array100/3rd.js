// // Create a function to find the object with the  lowest  value for a specific property.

const objectWithThelowestValue = (objects, property, propertyType) => {
  const lastIndex = objects.length - 1;
  let sortedObjects = [];
  if (propertyType == "string") {
    sortedObjects = objects.sort((a, b) =>
      b[property].localeCompare(a[property])
    );
  } else if (propertyType == "number") {
    sortedObjects = objects.sort((a, b) => b[property] - a[property]);
  } else {
    return {};
  }
  return sortedObjects[lastIndex];
};
const myArray = [
  {
    name: "ak",
    age: 29,
    mass: 50,
  },
  {
    name: "zk",
    age: 19,
    mass: 80,
  },
  {
    name: "ck",
    age: 20,
    mass: 60,
  },
];
console.log(objectWithThelowestValue(myArray, "name", "string"));
