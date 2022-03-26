const person = {
  name: "Zodiac",
  age: 56,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

// coding challenge
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};

function makeList(arr) {
  //   const resultDisplayArray = `
  // [ <li class="text-warning">${arr[0]}</li>
  //   <li class="text-warning">${arr[1]}</li>
  //   <li class="text-warning">${arr[2]}</li> ]`;
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li> `);
  }
  return resultDisplayArray;
}

console.log(makeList(result.failure));
