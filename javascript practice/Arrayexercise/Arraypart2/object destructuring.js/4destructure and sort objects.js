const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
  
  const sortedData = data.sort(({ name: a }, { name: b }) => a.localeCompare(b));
  console.log(sortedData);
 