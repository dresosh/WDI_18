function maxOfTwoNumbers(x,y) {
  if (x < y) {
    return y;
  } else if (x > y) {
    return x;
  }
}

function maxOfThree(x,y,z) {
  if (x > y && x > z) {
    return x;
  }
  if (y > x && y > z) {
    return y;
  }
  if (z > x && z > y) {
    return z;
  }
}

function isCharacterAVowel(c) {
  var vowels = ['a','e','i','o','u'];
  if (vowels.indexOf(c) !== -1) { //This method returns -1 if the value to search for never occurs.
    return true;
  } 
    return false;
}

function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function multiplyArray(arr) {
var product = arr[0];
for (var i = 1; i < arr.length; i++) {
product *= arr[i];
}
return product;
}

var reverseString = function (str){
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};

function findLongestWord (arr) {
  longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

function filterLongWords (arr,num) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > num){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
