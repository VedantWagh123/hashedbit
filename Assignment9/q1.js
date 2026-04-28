// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function testScope() {
  var a = 10;     
  let b = 20;      
    const c = 30;   

  if (true) {
    var a = 100;  
    let b = 200;    
    const c = 300;  
    console.log(a, b, c);  
  }

  console.log(a, b, c);  
}

testScope();

// var = function scope
//  let & const = block scope  