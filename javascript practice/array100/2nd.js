// Create a function to find the object with the highest value for a specific property.
const objectWithTheHeighestValue = (objects, property, propertyType) => {
  const lastIndex = objects.length - 1;
  let sortedObjects = [];
  if (propertyType == "string") {
    sortedObjects = objects.sort((a, b) =>
      a[property].localeCompare(b[property])
    );
  } else if (propertyType == "number") {
    sortedObjects = objects.sort((a, b) => a[property] - b[property]);
  } else {
    return {};
  }
  return sortedObjects[lastIndex]
};
const myArray = [
  {
    name: "ak",
    age: 19,
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
console.log(objectWithTheHeighestValue(myArray, "age", "number"));
