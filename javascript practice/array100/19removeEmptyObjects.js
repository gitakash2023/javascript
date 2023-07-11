// Create a function to remove objects with empty or undefined properties from an array.
const removeEmptyObjects = (arr) => {
  return arr.filter((obj) => {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
        return false;
      }
    }
    return true;
  });
};
const data = [
    { name: 'John', age: 25, occupation: 'Engineer' },
    { name: '', age: null, occupation: 'Teacher' },
    { name: 'Jane', age: 30, occupation: undefined },
    { name: 'Mark', age: 45, occupation: 'Doctor' },
    { name: 'Sarah', age: null, occupation: null }
  ];
  
  const filteredData = removeEmptyObjects(data);
  console.log(filteredData);
  
