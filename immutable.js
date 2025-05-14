// React many operations are immutable, where you do not manipulate underlying data structure
// Will focus on how to add, delete elements from arrays without mutating original array

// In JavaScript (especially in React), immutability means not modifying the original data structure but instead creating a new updated version of it. This ensures predictability, avoids unintended side effects, and optimizes performance in React's state updates.

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Moby Dick", author: "Herman Melville" },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen" },
];

const newBook = {
  id: 6,
  title: "Harry Potter",
  author: "Master",
};


const booksAfterAdd = [...books, newBook];

console.log(booksAfterAdd);

// delete book obj

const booksAfterDelete = booksAfterAdd.filter((book) => book.id != 3);

console.log(booksAfterDelete);

// update book

const bookAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, title: "It was all like a dream" } : book
);
