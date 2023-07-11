// Create a function to find the average value of a specific property in an array of objects.
const averageValue = (objects, property) => {
  const length = objects.length;
  const properties = objects.map((obj) => obj[property]);
  const sum = properties.reduce((sum, num) => sum + num, 0);
  const average = sum / length;
  if (isNaN(average)) {
    return 0;
  }
  return average;
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

console.log(averageValue(myArray, "name"));
