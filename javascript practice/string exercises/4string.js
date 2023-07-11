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