// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

const numbers = [1, 2, 3, 4, 5];

function squareArray(arr) {
  return arr.map(n => n * n);
}

console.log(squareArray(numbers));