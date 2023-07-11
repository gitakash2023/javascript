// write a function to Doubles even numbers in an array and filters out odd numbers.

function mapDoubleAndFilterEven(num) {
  return num.map((number) => number * 2).filter((ele) => ele % 2 === 0);
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(mapDoubleAndFilterEven(myArray));
