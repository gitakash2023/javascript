// Extract Odd Numbers from an Array:


const oddNumber=(arr)=>arr.map((num)=>num%2==1 ?num :null).filter((num)=>num!==null)

const numers=[1,2,3,4,5,6,7,8]
console.log(oddNumber(numers));