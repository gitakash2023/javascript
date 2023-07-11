// write a function to filter out even numbers, double them, and then calculate their sum:

function filterEvenAndSum(array) {
    return array.filter((number) => number % 2 === 0)
                .map((number) => number * 2)
                .reduce((sum, number) => sum + number, 0);
  };

  const myArr =[1,2,3,4,5,6,7,8,9]
  console.log(filterEvenAndSum(myArr));
  