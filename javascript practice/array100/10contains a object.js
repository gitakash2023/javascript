//  Create a function to check if an array of objects contains a specific object.

const isContainsSpecificObject = (arr, specificObj) => {
  return arr.some((obj) => isObjectsAreSame(obj, specificObj));
};

const myArr = [
  {
    name: "ak",
    age: 29,
  },
  {
    name: "bk",
    age: 78,
  },
  {
    name: "ck",
    age: 78,
  },
  {
    name: "hk",
    age: 69,
  },
];

const isObjectsAreSame = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    return Object.keys(obj1).every((key) => obj1[key] == obj2[key]);
  }
};
console.log(
  isContainsSpecificObject(myArr, {
    name: "hk",
    age:69,
  })
);
