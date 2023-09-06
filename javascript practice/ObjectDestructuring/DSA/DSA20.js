// Rotate an array to the left 1 position
const reverse = (arr, startIdx, endIdx) => {
    while (startIdx <= endIdx) {
      const temp = arr[startIdx];
      arr[startIdx] = arr[endIdx];
      arr[endIdx] = temp;
      startIdx++;
      endIdx--;
    }
  };
  const rotateToLeft = (arr, position) => {
    reverse(arr, 0, position - 1);
    reverse(arr, position, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
  };
  const myArr = [1, 2, 3, 4, 5];
  rotateToLeft(myArr, 1);
  console.log(myArr);
  //  [2,1 ,5,4,3]
  // [3,4,5,1,2]
  //  how to swap variables
  // how to reverse arr
  
  