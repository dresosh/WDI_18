// Write a function generator to make the following code work correctly:
function makeMultiplicator(n) {
  // your code inside this function
}

var timesThree = makeMultiplicator(3),
    timesNine = makeMultiplicator(9);

if (timesThree !== undefined && timesThree(12) === 36) {
  console.log('the TimesThree multiplicator works');
}

if (timesNine !== undefined && timesNine(3) === 27) {
  console.log('the timesNine multiplicator works');
}
