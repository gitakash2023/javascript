// Create a function to find the object with the minimum length of a specific property in an array.
const findObjectWithMinLength = (arr, property) => {
 let minLengthObject = arr[0];
  arr.forEach((obj) => {
    if (obj[property].length < minLengthObject[property].length) {
      minLengthObject = obj;
    }
  });
  return  minLengthObject
};
const array = [
    { name: 'Akash', data: [1, 2, 3] },
    { name: 'patal', data: [4, 5] },
    { name: 'ravan', data: [6, 7, 8, 9] },
  ];
console.log(findObjectWithMinLength(array,'data'))