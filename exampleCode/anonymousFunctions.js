// var magic = function () {
//   return new Date();
// };

const magic = () => {
  new Date();
};

// Anonymous functions with arguments
// var myConcat = function (arr1, arr2) {
//   return arr1.concat(arr2);
// };

const myConcat = (arr1, arr2) => {
  arr1.concat(arr2);
};

// work really well with higher order functions
// maps, filter, etc, takes functions as arugments
const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x ** 2);
  return squaredIntegers;
};

// default parameters for optional arguments
const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

// rest operator
// converts everything passed in as an array
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3, 4));
