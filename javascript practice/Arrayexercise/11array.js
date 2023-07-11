
const countObjects = (array)=> {
    let count = 0;
  
    array.forEach((item)=> {
      if (typeof item === 'object') {
        count++;
      }
    });
  
    return count;
  }
 
  const myArray = [1,  {name: 'akash'},  {age: 25}];
  
  console.log(countObjects(myArray)); 






