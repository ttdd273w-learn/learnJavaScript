var vowel = { x: 3.6, y: 7.4, z: 6.53 };

var x = vowel.x;
var y = vowel.y;
var z = vowel.z;

// we create variables a, b, and c
const { x: a, y: b, z: c } = vowel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}

// nested objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  const {
    tomorrow: { max: maxOfTmrw },
  } = forecast;
  return maxOfTmrw;
}

// assign variables from arrays
// this assigns the first two elements
const [z, x] = [1, 2, 3, 4, 5, 6];

// to assign other positions, you need spaces
const [z, x, , y] = [1, 2, 3, 4, 5, 6];

let aprime = 8,
  bprime = 6;

(() => {
  "use strict";
  [aprime, bprime] = [bprime, aprime];
})();

// use destructuring with rest operator
const source = [1, 2, 3, 4, 5, 6, 7];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}

// use destructuring to pass object as an argument
const stats = {
  max: 78,
  min: 67,
  standard_deviation: 4.34,
  median: 76,
};

// this is commonly used with api calls
const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();
