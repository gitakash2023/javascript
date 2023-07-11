//   Create a function that splits a string into an array of words and sorts them in alphabetical order.
//  For example, if the input is "banana apple orange", the output should be ["apple", "banana", "orange"].

const sortOrder = (str =>{

    return str.split(' ').sort()

 })

const inputAsStr = "banana apple orange" ;
console.log(sortOrder(inputAsStr));

