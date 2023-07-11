//  Create a function to group objects in an array based on a specific property.
const books = [
  { title: "Book 1", genre: "Fiction" },
  { title: "Book 1", genre: "Fiction" },
  { title: "Book 2", genre: "Non-fiction" },
  { title: "Book 2", genre: "Fiction" },
  { title: "Book 3", genre: "Non-fiction" },
];
const obj = {};
const property = "title";
books.forEach((item) => {
  if (obj[item[property]]) {
    obj[item[property]] = [...obj[item[property]], item];
  } else {
    obj[item[property]] = [item];
  }
});

console.log(obj)
// 2nd method :
// // books.map(item => item[property]).forEach(prop => {
//     obj[prop] = books.filter(book => book[property] == prop)
// })