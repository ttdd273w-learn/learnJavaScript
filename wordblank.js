function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
  var result =
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;
  return result;
}

console.log(wordBlank("dog", "big", "ran", "quickly"));
