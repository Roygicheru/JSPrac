// ! FUNCTIONS
// ? A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables.


// function addTwoNumbers(){
    // Body of the function
// }

// calling a function -> array method operations -> array.push()

// addTwoNumbers();

// create a function named greet()
function greet() {
    // body of the function
    console.log("Hello World!");
}

// store a function in the displayPI variable
// this is a function expression
let displayPI = function() {
    console.log("PI = 3.14");
}

// displayPI()

// greet()

//! JavaScript Function Arguments

// function with a parameter called 'name'
function greetOne(name) {
    // console.log(`Hello ${name}`);
    console.log("Hello " + name);
}

// // pass argument to the function
// greetOne("Tim")
// greetOne("Pacific")
// greetOne("Roy")
// greetOne("Eugene")
// greetOne("Yego")

// // Output: Hello John

// function with two arguments
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    // template strings
   console.log(`Sum: ${sum}`);
}

// // // call function by passing two arguments
//  addNumbers(4,5);

// // Output:
// // Sum: 9

// The return Statement
// We can return a value from a JavaScript function using the return statement.

function findSquare(num) {
  // return square
  return num * num;
}

 // call the function and store the result
 let square = findSquare(3);

//  console.log(square);

 function display() {
   console.log("This will be executed.");

   return "Returning from function.";

 }

 let message = display();
//  console.log(message); 

//  scope -> visibility of your variables -> global/local
// global - > the variable can be accessed anywhere witthin your file
// local -> variable only accessed within (functions)

// global variable
let nameA = "Tim";


function printName(name) {
    // local variable
    let nameB = "Eugene"
     console.log(nameB);
    
    console.log(name);
    
}

printName();
// console.log(nameA);
// console.log(nameB);

