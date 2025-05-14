let users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 47, occupation: "programmer" },
  { name: "Albert", age: 76, occupation: "programmer" },
];

// ?AND

// filter age less than 50 and occupation is gardener
const myTodos = [
  { todo: "one", id: 1 },
  { todo: "two", id: 2 },
  { todo: "three", id: 3 },
];

function removeTodoById(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}

// Example usage:
const newTodos = removeTodoById(myTodos, 2);
console.log(newTodos);


