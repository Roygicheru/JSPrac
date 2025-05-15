// Functions
/* A function is an independent block of code that does a task*/
function greet() {
    console.log("Hello World!");
}

// store a function in the displayPI variable
// this is a function expression
let displayPI = function() {
    console.log("PI = 3.14");
}

// call the greet() function
greet();

// call the reply() function
displayPI();

// JS Function arguments

// function with a parameter called name
function greetOne (name){
    console.log("Hello " + name)
}

greetOne("Tim")

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(`Sum: ${sum}`);
}

addNumbers(5, 4);

// The return Statement
// We can return a value from a JavaScript function using the return statement.

// function to find square of a number
function findSquare(num) {
    // return square
    return num * num; 
}

// call the function and store the result
let square = findSquare(3);

console.log(`Square: ${square}`);