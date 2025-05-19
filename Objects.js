// student object
const student = {
  firstName: "Jack",
  rollNo: 32,
};

console.log(student);

console.log(student.firstName);
console.log(student["name"]);


//Mutability and immutability
const person = {
  name: "Bobby",
  hobby: "Dancing",
};

// modify property
person.hobby = "Singing";

// display the object
console.log(person);


const studentTwo = {
  name: "John",
  age: 20,
};

// add properties
studentTwo.rollNo = 14;
studentTwo.faculty = "Science";

// display the object
console.log(studentTwo);

const employee = {
  name: "Tony",
  position: "Officer",
  salary: 30000,
};

// delete object property
delete employee.salary;

// display the object
console.log(employee);


const personTwo = {
    name: "Bob",
    age: 30,

    // use function as value
    greet: function () {
        console.log("Bob says Hi!");
    }
};

// call object method
personTwo.greet();  // Bob says Hi!


// outer object student
const studentThree = {
    name: "John",
    age: 20,

    // contains another object marks
    marks: {
        science: 70,
        math: 75
    }
};

console.log(studentThree.marks.science);


const object1 = {
  a: "some string",
  b: 42,
};

let valueA = object1.a;
console.log(valueA);

const {a} = object1;
console.log(a);


// destructuring and spread operators 

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}


// person object
const personFour = {
    name: "John",
    age: 30,

    // method
    introduce: function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
};

// access the introduce() method
personFour.introduce();

// Output: My name is John and I'm 30 years old.
// global and local scope -> function/object -> accessed within that function/object

const date = new Date();

console.log(date.getFullYear());
