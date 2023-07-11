// Create a function to find the object with the maximum length of a specific property in an array.
const findObjectWithMaxLength = (arr, property) => {
  let maxLengthObject = arr[0];
  arr.forEach((obj) => {
    if (obj[property].length > maxLengthObject[property].length) {
      maxLengthObject = obj;
    }
  });
  return maxLengthObject;
};
const array = [
    { name: 'Akash', data: [1, 2, 3] },
    { name: 'patal', data: [4, 5] },
    { name: 'ravan', data: [6, 7, 8, 9] },
  ];
console.log(findObjectWithMaxLength(array,'data'))
