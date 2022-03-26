// older way to create an object

// have a constructor
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};

var zeus = new SpaceShuttle("Jupiter");

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");

// getters and setters
class Book {
  constructor(author) {
    // usually used for private variables
    this._author = author;
  }

  // getter
  get writer() {
    return this._author;
  }

  set writer(newAuthor) {
    this._author = newAuthor;
  }
}

function makeClass() {
  class Thermostat {
    // passed in as f, but return c
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
}

// this is how you use a getter and setter
const Thermostat = makeCLass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
