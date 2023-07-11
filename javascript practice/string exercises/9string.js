 /*Write a function that splits a string into an array of sentences. 
Assume that sentences end with a period (.), exclamation mark (!), or question mark (?). 
For example, if the input is "Hello! How are you?", the output should be ["Hello", "How are you"].
*/

const splitIntoSentence = ((inputstr) =>{
   const sentence = inputstr.replaceAll('?','.').replaceAll('!','.').split('.')

  return sentence.filter(item=>item)
})
const inputStr = "Hello! How are you?"
console.log(splitIntoSentence (inputStr))
// undefined , null ,'' ,0 are false values 