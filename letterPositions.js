//Imported Functions
const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;

  let i;
  for (i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }

  return true;
};

const assertArraysEqual = function(arrA, arrB) {
  let a = arrA;
  let b = arrB;
  if (eqArrays(a, b) === true) {
    console.log('😀Assertion Passed: ', a, ' === ', b);
  } else {
    console.log('😀Assertion Failed: ', a, '!== ', b);
  }
};

//Main Function
const letterPositions = function(sentence) {
  const results = {};

  let i;
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }

  return results;
};

//Code Test
console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('hello'));
console.log("\n...asserting arrays...\n");
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);