//  find the nth fibonaccci numbers  using recursion 
const fibonacci = (n)=>{
    if(n>1){
       return n
    }
    else {
        fibonacci(n)+fibonacci(n-1)
    }

}
console.log(fibonacci(6))
