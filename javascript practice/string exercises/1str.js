/* (Q1) Write a function that takes a string as input and splits it into an array of words.
  For example, if the input is "Hello world", the output should be ["Hello", "world"].*/

const splitStringIntoWords = (str)=>{
    //  used split method to split str into words
     return str.split(' ')
   

}

 const input = "Hello world";
console.log(splitStringIntoWords(input ));
// Output:  ['Hello', 'world']


/*(Q2)Create a function that splits a sentence into an array of individual characters.
 For example, if the input is "Hello", the output should be
  ["H", "e", "l", "l", "o"].*/

 const splitStringIntoEachWords = (str) => {
      // Use the split method to split the string
  return str.split('')
  
 
 };

 const stringHello = "Hello" ;    //input example
  const splitedHello =splitStringIntoEachWords( stringHello)
 console.log( splitedHello);
//  output : ['H', 'e', 'l', 'l', 'o']

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

  /* (Q4) Implement a function that splits a string into an array of words, ignoring any leading
   or trailing spaces.
   For example, if the input is "   Hello world!  ", the output should be ["Hello", "world!"].
*/

const strsplit = (str => {
    // trim str for remove space from  both start and end  and split by space 
 return str.trim().split(' ')
 
    
})
const inputstr = "   Hello world!  "; // input example 
console.log(strsplit(inputstr));
// output : ['Hello', 'world!']

/*   Write a function that splits a string into an array of sentences.
 Assume that sentences end with a period (.), exclamation mark (!), or question mark (?). 
 For example, if the input is "Hello! How are you?", 
 the output should be ["Hello", "How are you"].
*/

// const splitIntoSentence = (str =>{
//  return str.split(/[.!?]/)
  
    
//   })

// const inputSentence =  "Hello! How are you?" ;
// console.log(splitIntoSentence(inputSentence ));




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



//   Create a function that splits a string into an array of words and sorts them in alphabetical order.
//  For example, if the input is "banana apple orange", the output should be ["apple", "banana", "orange"].

  const sortOrder = (str =>{

        return str.split(' ').sort()
    
     })
 
    const inputAsStr = "banana apple orange" ;
    console.log(sortOrder(inputAsStr));







