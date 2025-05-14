// comments

// A function to calculate total -> comment

function calculateTotal(price, quantity) {
  return price * quantity;
}

// ?Java and other languages

// const: String myName = "Brian Musili"

const myNameTwo = "Brian Musili";

// declare let, const or var

// ! Let -> reassign the value

// ? const -> you cannot reassign the value

let age = 23;

console.log(age);

// Reassigning the value of age

age = 25;

console.log(age);

const minAge = 18;

// minAge = 25;

console.log(minAge);

// Math operations

const valueA = "10";

const firstName = "Brian";

const secondName = "Musili";

const valueB = 20;

let valueC = valueA + valueB;

// String concatenation
let fullName = firstName + secondName;

const addTodoData = {
  item: 1,
  title: "Attend Js Class",
};

// "+", "-", "/", "*" - number data type 10 + 20 = 30,  Brian + Musili = BrianMusili

console.log(valueC);
console.log(fullName);

//! ARRAYS
// stores multiple values - string, number, object, array(2D, 3D)
//? Arrays have indexes which are used to identify unique element/item
// ? Index in array starts from index 0,1,2,4...........
// ! We changing our array -(mutability/immutability) - array methods -> ()
let arrString = ["Roy", "Tim", "Pacific", "Eugene", "Yegon"];
arrString.push("Kaume");
// ()
 console.log(arrString);

//  pop array method
arrString.pop();

console.log(arrString)

const arrNumber = [17, 18, 15, 19, 14];
const arrObjects = [
  {
    item: 1,
    title: "Attend Js Class",
  },
  {
    item: 1,
    title: "Attend Js Class",
  },
  {
    item: 1,
    title: "Attend Js Class",
  },
];

console.log("Value at index 0 -> " + arrString[0]);
console.log("Value at index 1 -> " + arrNumber[1]);
console.log("Value at index 1 -> " + arrString[1]);

// 2D array
const arrayWithinArray = [
  [2, 4, 5],
  [1, 2, 4],
];
const variableName = [];

let dailyActivities = ["eat", "sleep"];

// add an element at the end
dailyActivities.push("exercise");

console.log(dailyActivities);
