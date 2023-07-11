// Create a function to count the occurrences of each object in an array.
// const countTheOccurrences = (object, item) => {
count = 0;

//   object.forEach((obj) => {
//     if (obj === item) {
//       return count++;
//     }
//   });
// };
// const occOfEachItem = { 1: 1, 2: 4, 3: 2, 4: 2 };
const arr = [1, 2, 3, 4, 4, 2, 2, 3, 2];

const obj = {};

arr.forEach((item) => {
  if (obj[item]) {
    obj[item]++;
  } else {
    obj[item] = 1;
  }
  //   check if item exist in our  occOfEachItem  object
  // if it exist then increase its occurence
  // otherwise add this item in object with value 1.
});
console.log(obj);
// arr =[1,2,3,4]
// mutate /update value of an element in array at index i
// arr[i]= updated value
// add/update a key's value  in a object
//  obj[key]=value or updated value
// check if a key  exist in object
// if (obj[key])
