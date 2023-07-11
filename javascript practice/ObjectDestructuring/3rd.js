const company = {
    name: 'ABC Corp',
    departments: {
      sales: ['akash', 'abhi', 'Bk'],
      engineering: ['Mp', 'Ak', 'Bikash'],
      marketing: ['Ram', 'Rekha']
    }
  };
  
  // Destructuring nested objects with arrays
  const { departments: { sales: salesTeam, engineering: engineeringTeam } } = company;
  
  console.log(salesTeam);       // Output: ['akash', 'abhi', 'Bk']
  console.log(engineeringTeam); // Output: ['Mp', 'Ak', 'Bikash']
  