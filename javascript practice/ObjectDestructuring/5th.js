const person = { name: 'KK', hobbies: ['reading', 'Yoga'] };
const { name, hobbies: [hobby1, hobby2] } = person;
console.log(name); // Output: KK
console.log(hobby1); // Output: reading
console.log(hobby2); // Output: Yoga
