//  write a function for checking a number is prime or not

const isNumberPrime = (n) => {
    let isPrime = true;
    let currentNumber = 2;
    let sqrtOfNumber = Math.sqrt(n);
  
    while (currentNumber <= sqrtOfNumber) {
      if (n % currentNumber == 0) {
        isPrime = false;
        break;
      }
      currentNumber++;
    }
  
    return isPrime;
  };
  
  console.log(isNumberPrime(61));
  