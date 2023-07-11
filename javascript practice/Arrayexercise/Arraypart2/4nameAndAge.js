// write a function to find name and age of array of an object

function getNameAndAge(people) {
    return people.map((person) => `${person.name} ${person.age} `);
  }
  
  const people = [
    { name: "AK", age: 25 },
    { name: "BK", age: 30 },
    { name: "CK", age: 30 },
  ];
  
  console.log(getNameAndAge(people));