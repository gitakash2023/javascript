// Create a function to filter out objects based on a specific property value.
const fiteredObjectWithSpecificProperty = (objects,property,value) => {
    return  objects.filter((obj)=>obj[property]==value)

};

const myArray = [
  {
    name: "ak",
    age: 19,
    mass: 50,
  },
  {
    name: "bk",
    age: 20,
    mass: 80,
  },
  {
    name: "ck",
    age: 20,
    mass: 60,
  },
];
console.log(fiteredObjectWithSpecificProperty (myArray,'age',20))


