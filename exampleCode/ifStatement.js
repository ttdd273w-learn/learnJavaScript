function ourTrueorFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(true));

// This is the else statement
// and the else if statement

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 20) {
    return "Less than 20";
  } else {
    return "Something else";
  }
}
