const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});

countValue
  .then(function successValue(result) {
    console.log(result);
  })
  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  })
  .then()
  .then();

//   You can chain multiple .then methods. Each .then can handle the result of the previous one.

//   In the provided code, the result argument in the countValue.then method is the value that the Promise resolves with

// returns a promise
let countValue2 = new Promise(function (resolve, reject) {
  reject("Promise rejected");
});

// executes when promise is resolved successfully
countValue2
  .then(function successValue(result) {
    console.log(result);
  })
  .catch(function errorValue(result) {
    console.log(result);
  })
  .finally(() => {
    console.log("We are in done");
  });

// returns a promise
let countValue3 = new Promise(function (resolve, reject) {
  // could be resolved or rejected
  resolve("Promise resolved");
});

// add other blocks of code
countValue3.finally(function greet() {
  console.log("This code is executed.");
});

// !Async/await

async function f() {
  console.log("Async function.");
  return Promise.resolve(1);
}

f().then(function (result) {
  console.log(result);
});

// ! EXAMPLE 2

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();

// In the above program, if await is not used, hello is displayed before Promise resolved.

// a promise
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  try {
    // wait until the promise resolves
    let result = await promise2;

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

// calling the async function
asyncFunc(); // Promise resolved


