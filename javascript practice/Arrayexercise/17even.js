// Extract Even Numbers from an Array:

const evenNumbers =(arr)=>arr.map((num)=>num%2===0 ?num :null).filter((num)=>num!==null)
const myNumbers=[2,3,4,5,6,7,8,12]
console.log(evenNumbers(myNumbers));