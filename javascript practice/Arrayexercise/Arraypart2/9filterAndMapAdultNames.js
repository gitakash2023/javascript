//  write a function to  filters objects representing people by their age being greater
// than or equal to 18,
//  and then maps the filtered objects to their name

function filterAndMapAdultNames(people) {
  return people
    .filter((person) => person.age >= 18)
    .map((persons) => persons.name);
}

const myArrayOfAnObject = [
  { name: "Akash", age: 20 },
  { name: "kk", age: 29 },
  { name: "Bikash", age: 17 },
  { name: "Mama", age: 27 },
  { name: "Sapna", age: 16 },
];

console.log(filterAndMapAdultNames(myArrayOfAnObject));
