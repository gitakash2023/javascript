// . Create a function to find the sum of a specific property in an array of objects.
const sumOfSpecificProperty = (object, property, propertyType) => {
  if (propertyType == "number") {
    return object
      .map((obj) => obj[property])
      .reduce((acc, curr) => acc + curr, 0);
  } else {
    return 0;
  }
};

const myarr = [
  {
    name: "ak",
    age: 26,
    mass: 67,
  },
  {
    name: "ak",
    age: 23,
    mass: 89,
  },
];

console.log(sumOfSpecificProperty(myarr, "age", "number"));
