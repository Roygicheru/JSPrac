const arr1 = [1,2,3,5]

const items = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];

// (acc, curr)

const totalPrice = items.reduce((accumulator, item) => {
  return (accumulator += item.price);
}, 0);


console.log(totalPrice);
