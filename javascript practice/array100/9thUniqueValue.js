// Create a function to remove duplicate objects from an array.
const removeDulicates =(arr)=>{
   return [...new Set(arr)]
}
const myArr =[1,2,3,2,3,1,2,3,'akash','akash']
console.log(removeDulicates(myArr))

