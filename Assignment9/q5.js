// Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

function getOddNumbers(arr) {
  return arr.filter(n => n % 2 !== 0);
}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6]));
