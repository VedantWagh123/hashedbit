// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.


const numbers = [1, 2, 3, 4, 5];

function getSum(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}

console.log(getSum(numbers));