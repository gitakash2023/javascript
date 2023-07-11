/*6. Create a function that splits a string into an array of numbers.
 Each number in the string is separated by a comma. 
 For example, if the input is "1,2,3,4,5", the output should be [1, 2, 3, 4, 5]. */
 const splitStringIntoNumbers =(str => {
    // Split the string into an array of number strings using the comma as the delimiter 
    return str.split(',').map(number => parseFloat(number.trim()));
  
   
})
  // Example as  input :
  const inputString = "1,2,3,4,5";
  const numbersArray = splitStringIntoNumbers(inputString);
  console.log(numbersArray);
  
  // Output: [1, 2, 3, 4, 5]

