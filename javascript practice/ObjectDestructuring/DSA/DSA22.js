const reverse = (arr) => {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  };
  const myArr = [1, 2, 3, 4, 5];
  console.log(reverse(myArr));
  