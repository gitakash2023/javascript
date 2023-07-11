//  write a function to filters even numbers from an array, squares them, and returns the new array.

function filterEvenSquares(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .map((sqrnum) => sqrnum * sqrnum);
}

const myArr = [1, 2, 3, 45, 6, 7, 8, 9, 8, 6, 5, 44];
console.log(filterEvenSquares(myArr));
