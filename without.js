// Function Implementation
// Test/Assertion Functions
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


//Actual Function
const without = function(source, itemRemove) {
  let i, j;
  for (i = 0; i < source.length; i++) {
    for (j = 0; j < itemRemove.length; j++) {
      if (source[i] === itemRemove[j]) source.splice(i, 1);
    }
  }
  return source;
};

// Test Code
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);