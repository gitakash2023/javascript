//  Create a function that will return in an array the first“p” prime numbers
// greaterthan“n”
const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const findFirstPrimesGreaterThanN = (p, n) => {
    const primes = [];
    let currentNumber = n + 1;
  
    while (primes.length < p) {
      if (isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }
  
    return primes;
  };
  
  console.log(findFirstPrimesGreaterThanN(5, 10));
  