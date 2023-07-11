/* 3. Write a function that splits a string into an array of substrings using
 a specific delimiter.
 For example, if the input string is "apple,banana,grape", and the delimiter is ",", the output 
 should be ["apple", "banana", "grape"].
*/


const splitStrIntoSubstr = (substr) => {
    // Use the split method to split the string
            return  substr.split(',')
 }

 const strinput = "apple,banana,grape" ; // Input example
  console.log(splitStrIntoSubstr( strinput));

  //Output:   ['apple', 'banana', 'grape']
