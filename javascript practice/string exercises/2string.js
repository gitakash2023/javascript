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