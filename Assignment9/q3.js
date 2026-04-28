// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array

function addElement(arr, el) {
  arr.push(el);
  return arr;
}

console.log(addElement([1, 2, 3], 4));