// write a function to calculate Hypotenuse of a right angle triangle
function calculateHypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
const sideA = 3;
const sideB = 4;
const hypotenuse = calculateHypotenuse(sideA, sideB);
console.log(hypotenuse);
