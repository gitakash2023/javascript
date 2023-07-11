//  write a function to find the area of a rectangle

function calculateAreas(rectangles) {
  return rectangles.map((rectangle) => rectangle.width * rectangle.height);
}

const myRectangle = [
  { width: 5, height: 3 },
  { width: 7, height: 4 },
  { width: 2, height: 6 },
];

console.log(calculateAreas(myRectangle));
