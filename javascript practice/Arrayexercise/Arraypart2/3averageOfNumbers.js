// write a function to find the average og given array elements

function getAverage(numbers) {
    const sum = numbers.reduce((accu, curr) => accu + curr, 0);
    return sum / numbers.length;
  }
  const myArr = [1,2,34,5,6,88,9,0]
  console.log(getAverage(myArr));
  