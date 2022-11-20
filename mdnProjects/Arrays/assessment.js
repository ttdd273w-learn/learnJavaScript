// Task 1
// let myArray = [];
// // Don't edit the code below here!
// section.innerHTML = " ";
// let para1 = document.createElement("p");
// para1.textContent = `Array: ${myArray}`;

// section.appendChild(para1);

// Task 2
// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// let myArray = myString.split("+");
// let arrayLength = myArray.length;
// let lastItem = myArray[arrayLength-1];

// // Don't edit the code below here!

// section.innerHTML = ' ';
// let para1 = document.createElement('p');
// para1.textContent = `Array: ${ myArray }`;

// let para2 = document.createElement('p');
// para2.textContent = `The length of the array is ${ arrayLength }.`;

// let para3 = document.createElement('p');
// para3.textContent = `The last item in the array is "${ lastItem }".`;

// section.appendChild(para1);
// section.appendChild(para2);
// section.appendChild(para3);

// Task 3
// let myArray = [
//   "Ryu",
//   "Ken",
//   "Chun-Li",
//   "Cammy",
//   "Guile",
//   "Sakura",
//   "Sagat",
//   "Juri",
// ];

// // Add your code here
// myArray.pop();
// myArray.push("First");
// myArray.push("Second");

// for (let i = 0; i < myArray.length; i++) {
//   myArray[i] = myArray[i] + `(${i})`;
// }

// let myString = myArray.join("-");

// // Don't edit the code below here!

// section.innerHTML = " ";

// let para1 = document.createElement("p");
// para1.textContent = myString;

// section.appendChild(para1);

// Task 4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here
eagle_index = birds.indexOf("Eagles");
if (eagle_index != -1) {
  birds.splice(eagle_index, 1);
}

let eBirds = birds.filter((name) => name.startsWith("E"));

// Don't edit the code below here!

section.innerHTML = " ";

const para1 = document.createElement("p");
para1.textContent = eBirds;

section.appendChild(para1);
