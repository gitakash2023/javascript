//  Create a function to merge multiple arrays of objects into a single array.
const mergeArrays = (...arrays) => {
    return [].concat(...arrays);
  };
  const arr1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  const arr2 = [{ id: 3, name: 'Mike' }, { id: 4, name: 'Emily' }];
  const arr3 = [{ id: 5, name: 'David' }, { id: 6, name: 'Sarah' }];
  const arr4 = [{ id: 5, name: 'David' }, { id: 6, name: 'Sarah' }];
  
  const mergedArray = mergeArrays(arr1, arr2, arr3,arr4);
  console.log(mergedArray);
    