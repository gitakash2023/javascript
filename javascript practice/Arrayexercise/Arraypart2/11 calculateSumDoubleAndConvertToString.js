//  write a function to calculate the sum of all numbers in an array, double the result,
// and convert it to a string:
function calculateSumDoubleAndConvertToString(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) * (2).toString();

}
const myArr =[2,4,5,6,7,8,9,5,3,2,45,]
console.log(calculateSumDoubleAndConvertToString(myArr));
