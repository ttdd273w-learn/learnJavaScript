// // Task 1
// const cat = {
//   name: "Bertie",
//   breed: "Cymric",
//   color: "white",
//   greeting: function () {
//     console.log("Meow!");
//   },
// };

// // Put your code here
// const catName = cat['name'];
// cat.greeting();
// cat.color = 'black';

// // Don't edit the code below here

// let para1 = document.createElement("p");
// let para2 = document.createElement("p");

// para1.textContent = `The cat's name is ${catName}.`;
// para2.textContent = `The cat's color is ${cat.color}.`;

// section.appendChild(para1);
// section.appendChild(para2);

// // Task 2
// let bandInfo;

// // Put your code here
// const myBand = {
//   name: "TTDD",
//   nationality: "USA",
//   genre: "pop",
//   members: 4,
//   formed: 2001,
//   split: false,
//   albums: [
//     { name: "Love Me Again", released: 2000 },
//     { name: "Don't Love Me Again", released: 1999 },
//   ],
// };

// bandInfo = `The band's name is ${myBand.name}. They are from ${myBand.nationality}.`;
// // Don't edit the code below here

// let para1 = document.createElement("p");
// para1.textContent = bandInfo;
// section.appendChild(para1);

// Task 3
// const cat = {
//   name: "Bertie",
//   breed: "Cymric",
//   color: "white",
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}.`);
//   },
// };

// Task 4
// We want to emphasize "Don't Repeat Yourself"

const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();

function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
}
