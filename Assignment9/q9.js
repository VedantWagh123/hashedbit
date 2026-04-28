
// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object

const obj1 = { name: "Rahul" };
const obj2 = { age: 21 };

function mergeObjects(o1, o2) {
  return Object.assign({}, o1, o2);
}

const result = mergeObjects(obj1, obj2);
console.log(result);