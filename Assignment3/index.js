//create an array of states in india  : remove all the names starting with vowels fromm the list . use array filter 

let states = [
  "Maharashtra", "Uttar Pradesh", "Odisha", "Assam",
  "Bihar", "Karnataka", "Tamil Nadu", "Rajasthan",
  "Gujarat", "Andhra Pradesh", "Punjab", "Kerala"
];

let result = states.filter(s => !["A","E","I","O","U"].includes(s[0].toUpperCase()));

console.log(result);


//lets str = '   i lov emy inda i    output expected = 'india my love i'
// write code for this 



// let str = 'I love my India';

// let output = str.split(" ").reverse().join(" ");

// console.log(output);


//let string = "INDIA"
//output = "indonesia"
//use arrray.splice
 
// let string = 'INDIA';

// let arr = string.split('');

// arr.splice(3, 0, 'O', 'N', 'E', 'S');

// let output = arr.join('');

// console.log(output);


//take any string with minimum 20 charecter count number of consonant and voewel in the stirng 


let str = "javascript is very powerful language";

let vowels = "aeiou";
let vCount = 0;
let cCount = 0;

for (let ch of str.toLowerCase()) {
  if (ch >= 'a' && ch <= 'z') {
    if (vowels.includes(ch)) {
      vCount++;
    } else {
      cCount++;
    }
  }
}

console.log("Vowels:", vCount);
console.log("Consonants:", cCount);


//  Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


// function correctfn(string, wrong, correct) {
//   return string.replace(wrong, correct);
// }

// let result = correctfn("I have a blak pen", "blak", "black");

// console.log(result);



// Q6) inputArr = [1,2,3,9,10,7,5,4,3] answer = [9, 10, 7] User array.filter and return numbers greater than 5.

let inputArr = [1,2,3,9,10,7,5,4,3];

let answer = inputArr.filter(num => num > 5);

console.log(answer);



// Q7) const students = [ { name: "Ram", scores: [80, 70, 60] }, { name: "Mohan", scores: [80, 70, 90] }, { name: "Sai", scores: [60, 70, 80] }, { name: "Hemang", scores: [90, 90, 80, 80] }, ];



const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

let output = students.map(s => {
  let total = s.scores.reduce((sum, val) => sum + val, 0);
  let avg = total / s.scores.length;
  return { name: s.name, average: avg };
});

console.log(output);


// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number. Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function singleDigitSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((sum, d) => sum + Number(d), 0);
  }
  return num;
}

console.log(singleDigitSum(456));



// Q9) Write a function to count the number of words in a paragraph



function countWords(text) {
  return text.trim().split(/\s+/).length;
}

console.log(countWords("This is a simple paragraph for testing words count"));



// Q10) Write a function to reverse a string. Input - Hello Outpur - olleH

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));





// write the code to find the average oas mentione above use array and object methods 

let data = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
// ];

// let output = data.map(obj => {
//   let key = Object.keys(obj)[0];
//   let marks = Object.values(obj[key]);

//   let total = marks.reduce((sum, m) => sum + m, 0);
//   let avg = Math.floor(total / marks.length);

//   return { [key]: { average: avg } };
// });

// console.log(output);