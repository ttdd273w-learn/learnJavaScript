var catName = "Quincy";
var quote;
// using let will cause an error
var catName = "Myself";

function catTalk() {
  // use strict enables strict mode, which
  // catches common coding mistakes
  // such as referencing an undeclared variable
  "use strict";

  catName = "Ollie";
  quote = catName + " says Meow!";
}

catTalk();

// -----------------------------------------------
function checkScope() {
  "use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
}

// vs
function checkScope1() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
}

// vs, var will not throw an error
function checkScope1() {
  "use strict";
  // let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
}

checkScope();
checkScope1();
