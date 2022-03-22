function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    // if the case === 1, strict equality, then set it to alpha, break
    // if there's no break, it will continue to the next switch
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

console.log(caseInSwitch(1));

// default option in switch statements
// kind of like else
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    // if the case === 1, strict equality, then set it to alpha, break
    // if there's no break, it will continue to the next switch
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    // for anything else that's not true
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

// multiple identical options in switch statements
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
}
