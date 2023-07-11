const person = { name: "akash", age: 25, city: "Raebareli" };

const { name, ...rest } = person;
console.log(name); // Output: akash
console.log(rest); // Output: {age: 25, city: 'Raebareli'}
