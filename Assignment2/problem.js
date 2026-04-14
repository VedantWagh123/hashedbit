//1 to 100 even numbers 

// for(let i= 1  ; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
// }
// }







//write a function to calculate which can add subtract multiply and divide two numers use switch inside function 

function calculator(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operation";
  }
}

// Example
console.log(calculator(10, 5, '+'));
console.log(calculator(10, 5, '-'));
console.log(calculator(10, 5, '*'));
console.log(calculator(10, 5, '/'));


//tax calculation using switch case

function findTax(salary) {
  let tax = 0;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      tax = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      tax = salary * 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      tax = salary * 0.20;
      break;
    case (salary > 1500000):
      tax = salary * 0.30;
      break;
    default:
      return "Invalid salary";
  }

  return tax;
}

// Example
console.log(findTax(400000));
console.log(findTax(800000));
console.log(findTax(1200000));
console.log(findTax(2000000));