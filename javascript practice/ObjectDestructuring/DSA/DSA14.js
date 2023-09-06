//  print the   first ten fibonacci numbers
const fibonacciNumbers = (n) => {
    let firstFibonacciNumber = [0, 1];
    for (let i = 2; i <= n; i++) {
      nextFibonacciNumber =
        firstFibonacciNumber[i - 2] + firstFibonacciNumber[i - 1];
      firstFibonacciNumber.push(nextFibonacciNumber);
    }
     return  firstFibonacciNumber
  };
   console.log(fibonacciNumbers(10))
  