/* (Q1) Write a function that takes a string as input and splits it into an array of words.
  For example, if the input is "Hello world", the output should be ["Hello", "world"].*/

  const splitStringIntoWords = (str)=>{
    //  used split method to split str into words
     return str.split(' ')
   

}

 const input = "Hello world";
console.log(splitStringIntoWords(input ));
// Output:  ['Hello', 'world']