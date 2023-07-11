/* Implement a function that splits a string into an array of words and removes any duplicate words. For example, 
if the input is "apple banana apple orange", the output should be ["apple", "banana", "orange"]. */

const removeDuplicates = ((input)=>{
    const splitedWords = input.split(' ')
    return [...new Set(splitedWords )]

});
const inputArray =  "apple banana apple orange apple apple " ;
console.log( removeDuplicates(inputArray))