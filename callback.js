// A function is a block of code that performs a certain task when called. For example,

// function
function greet(name, age, id, school, callBackFn) {
    console.log('Hi' + ' ' + name);
}

greet('Peter'); // Hi Peter

// In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function. For example,


// function
function greetTwo(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greetTwo("Peter", callMe);



//  program that shows the delay in execution

function greet3() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet3, 2000);
sayName('John');

// As you know, the setTimeout() method executes a block of code after the specified time.

// Here, the greet() function is called after 2000 milliseconds (2 seconds). During this wait, the sayName('John'); is executed. That is why Hello John is printed before Hello world.

// The above code is executed asynchronously (the second function; sayName() does not wait for the first function; greet() to complete).