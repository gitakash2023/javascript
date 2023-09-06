//  merge two arrays
const mergeArrays = (array1, array2) => {
    for (let i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
    }
    return array1;
  };
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];
  
  console.log(mergeArrays(arr1, arr2));
  