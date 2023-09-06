//  print firstb 100 prime numbers

const isNumberPrime = (n) => {
    let isPrime = true;
    let currentNumber = 2;
    let sqrtOfNumber = Math.sqrt(n);
  
    while (currentNumber <= sqrtOfNumber) {
      if (n % currentNumber === 0) {
        isPrime = false;
        break;
      }
      currentNumber++;
    }
  
    return isPrime;
  };
  
  const findFirst100Primes = () => {
    let count = 0;
    let num = 2;
    const primes = [];
  
    while (count < 100) {
      if (isNumberPrime(num)) {
        primes.push(num);
        count++;
      }
      num++;
    }
  
    return primes;
  };
  
  const first100Primes = findFirst100Primes();
  console.log(first100Primes);
  