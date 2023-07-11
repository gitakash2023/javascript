// Filters an array of numbers to include only positive and even numbers and then maps them to their cubes.



function filterAndMapPositiveEvenNumbers(numb) {
    return numb.filter((ele) => ele > 0 && ele % 2 === 0)
                 .map((number) => number * number * number);
  }

  const myArray = [-1,2,3,-4,-5,8,9,5,4]
  console.log(filterAndMapPositiveEvenNumbers(myArray));
  