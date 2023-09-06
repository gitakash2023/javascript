// calculate the sum of digits of positive int.
const sumOfDigits = (n) => {
    const stringNumber = n.toString();
  
    const splitedNumber = stringNumber.split("");
    let numberArray = [];
    for (let i = 0; i < splitedNumber.length; i++) {
      numberArray.push(Number(splitedNumber[i]));
    }
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
      sum = sum + numberArray[i];
    }
    return sum;
  };
  const myNumber = 1234;
  console.log(sumOfDigits(myNumber));
  //  way1
  // toString
  // split
  // Number constructor to convert string to number
  //  Or
  //   + operator  to convert string to number
  
  //  way2
  //  divide operator
  //  modulo operator
  // math.floor
  