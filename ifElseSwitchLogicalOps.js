// Output: You failed the examination.

// In computer programming, the if...else statement is a conditional statement that executes a block of code only when a specific condition is met. For example,

// Suppose we need to assign different grades to students based on their scores.

// If a student scores above 90, assign grade A.
// If a student scores above 75, assign grade B.
// If a student scores above 65, assign grade C.
// These conditional tasks can be achieved using the if...else statement.

let score = 49;

// 91

// b, grade b, B

// comparison operators > < >= <=, ==, ===, !==

// == just compare values without the data types
let oneNumber = 1;
let oneSTring = '1';
console.log(oneNumber == oneSTring);


// === compare with data types
console.log(oneNumber === oneSTring);

let two = 2;

let three = 3;

console.log(two !== three);

// Negate true -> false and vice versa




if (score > 90) {
  console.log("Grade A");
} else if (score > 75) {
  console.log("Grade B");
} else if (score >= 65) {
  console.log("Grade C");
} else if (score <= 50) {
  console.log("Failed");
}

// dirty code -> switch case statement

// switch (variable){
// case "value"
//  body.
//  break;
// }
//
//

let trafficLight = "greeny";
let message = "";

// green === red / yellow / green
switch (trafficLight) {
  case "red":
    message = "Stop immediately.";
    break;
  case "yellow":
    message = "Prepare to stop.";
    break;
  case "green":
    message = "Proceed or continue driving.";
    break;
  default:
    message = "Invalid traffic light color.";
}

console.log(message);

// Output: Proceed or continue driving.

// conditions
// 1-5
// 5-10
// 10>

// Logical operators -> &&, ||, !
// LOgical ! -> NOT -> returns the opposite of the value
// Logical  && -> AND -> condition true and condition two true = true , condition 1 = false, condition 2 = true = false;
// Logical || -> OR -> one of the conditions returns true -> condition 1 = false, condition 2 = true = true;
// Predicates -> AND, OR, true false


let number = 5;

// true/false

switch (true) {
  case number > 1 || number > 5:
    console.log("condition 1");

    break;
  case number > 5 && number < 10:
    console.log("condition 2");
    break;
  case number >= 10:
    console.log("condition 3");
    break;

  default:
    console.log("Default condition");
}


// Logical OR ||

// only one expression is true
let x = 2;
console.log((x <= 4) || (2 == 4)); 
console.log((x <= 4) && (2 == 4)); 
console.log(!(2 < 3));

// Objects in Javascript