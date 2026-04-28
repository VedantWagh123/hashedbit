// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().


const person = {
  name: "Rahul",
  age: 21,
  city: "Pune"
};

function getKeys(obj) {
  return Object.keys(obj);
}

const result = getKeys(person);
console.log(result);