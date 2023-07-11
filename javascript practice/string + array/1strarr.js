/* Write a JavaScript function to capitalize the first letter of each word in a given sentence.*/

const capitalizeSentence = ((sentence)=>{
   const splitedSetence = sentence.split(' ');
   splitedSetence .forEach((value , index, array)=>{
    array[index] = value.charAt(0).toUpperCase() + value.slice(1);
   
   })
   const capitalizedSentence =capitalizeSentence .join(" ");

return capitalizeSentence
})
const inputExample = "hello welcome to aks tech"
console.log(capitalizeSentence (inputExample))
