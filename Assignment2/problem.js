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




// 4. Write a function to perform this. You are given two numbers n1 and n2.
//  You need to find the sum of the products of their corresponding digits. So, 
//  for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
// // 


function sumOfProducts(n1, n2) {
  let sum = 0;

  while (n1 > 0 || n2 > 0) {
    let d1 = n1 % 10;  
    let d2 = n2 % 10; 

    sum += d1 * d2;

    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}

// Example
console.log(sumOfProducts(6, 34)); 
console.log(sumOfProducts(123, 45)); 