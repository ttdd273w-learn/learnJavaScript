var contacts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "1234",
    likes: ["Hogwarts", "Girls"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "4123",
    likes: ["Boys", "Violin"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      //   if (contacts[i][prop] === undefined) {
      //     return "No such property";
      //   }
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
  // misunderstood data structure
  //   if (contacts[name] === undefined) {
  //     return "No such name";
  //   } else if (contacts[name][prop] === undefined) {
  //     return "No such property";
  //   }
  //   return contacts[name][prop];
}

console.log(lookUpProfile("Harry", "likes"));
