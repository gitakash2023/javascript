// 1. Given an object `person` with properties `name` and `age`, 
// use object destructuring to extract the values into variables `name` and `age`.

const person={
    name:'Akash',
    age:26
};
const {name,age, subject='maths'}=person;
console.log(name);

// destructuring object as function parameter
// promise,fetch ApI,then ,catch ,async await  ,try  catch
