//  cerate a function that recieves a array of numbers as arguments and return an array containing only the positive numbers
const positiveNumbers = (arr) => {
    let arrOfPositive = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arrOfPositive.push(arr[i]);
      }
    }
    return arrOfPositive;
  };
  const myArr = [-1, -2, -3, -4, 0, 1, 2, 3, 4, 5, 6, 7];
  console.log(positiveNumbers(myArr));
  