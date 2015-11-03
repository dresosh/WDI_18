// Write a function generator that takes a predicate and returns a function
// that takes a list of numbers and returns the ones that match the predicate.
// The unit test that is attached, do not edit, however note that it is testing
// that 'listResults' ends up with an ordered array of odd numbers.

"use strict";
function makeListWhereTrue (predicate) {
    // your code here
}

var inputnumbers = [2,1,3,4,6,5,8,7,9,0],
    listOdds = makeListWhereTrue(isOdd),
    listResult = listOdds(inputnumbers);







// --------DO NOT MODIFY BELOW THIS LINE ----------
// The code below helps to check your answer.
function numberListsEqual(a, b) {
  return  (
            !Array.isArray(a) ||
            !Array.isArray(b) ||
            (a.length != b.length) ||
            a.filter(function(e, i){ return (typeof e !== "number") || e !== b[i]; }).length
          ) ?
    false :
    true ;
}

if (listOdds !== undefined && numberListsEqual(listResult, [1, 3, 5, 7, 9])) {
  console.log('listOdds produces the right answer!');
} else {
  console.log('listOdds is still confused.');
}
