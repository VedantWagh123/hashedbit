// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties

const person = { name: "Rahul", age: 21, occupation: "Developer" };

function greet(p) {
  console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and I work as a ${p.occupation}`);
}

greet(person);