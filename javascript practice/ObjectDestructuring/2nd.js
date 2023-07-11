const student = {
    name: 'Akash',
    age: 25,
    grades: {
      math: 92,
      science: 89,
      english: 90
    }
  };
  
  // Destructuring nested objects with renamed properties
  const { name, grades: { math: mathGrade, science: scienceGrade } } = student;
  
  console.log(name);        // Output:Akash
  console.log(mathGrade);   // Output: 92
  console.log(scienceGrade);// Output:89
  