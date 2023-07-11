function processUser({ name = "Unknown", email = "Unknown" }) {
    // Do something with name and email
    console.log("Name:", name);
    console.log("Email:", email);
  }
  
  // Example usage:
  const user1 = { name: "John Doe", email: "johndoe@example.com" };
  processUser(user1);