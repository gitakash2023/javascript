// write a function to filter unique values and  find n array of square of them

function filterAndMapUniqueNumbers(numbers) {
  return [...new Set(numbers)].map((num) => num * num);
}

const myArray = [2, 4, 4, 5, 6, 7, 8, 8, 8, 2, 3];
console.log(filterAndMapUniqueNumbers(myArray));
