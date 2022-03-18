var myGlobal = 10;

function fun1() {
  // if we have var keyword, then it is scoped to this function
  // however, because we don't have the var keyword
  // it becomes global automatically
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}

fun1();
fun2();
// local scope
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}

myLocalScope();
// this will be undefined
console.log(myVar);

// you can also have global and local variables with the same name

var outerWear = "T-shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
// this will be local
console.log(myOutfit());
// this will be global
console.log(outerWear);

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));

var sum = 0;

function addFive() {
  sum += 5;
}
