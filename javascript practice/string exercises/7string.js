 /*Write a function that splits a string into an array of lines. 
Each line is separated by a newline character (\n). For example, 
if the input is "Line 1\nLine 2\nLine 3", the output should be ["Line 1", "Line 2", "Line 3"].*/
const newArray = ((arr)=>{
    return arr.split('\n')
})
const input =  "Line 1\nLine 2\nLine 3" ;
console.log(newArray(input));
// output :   ['Line 1', 'Line 2', 'Line 3']