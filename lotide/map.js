//our map function will take in two arguments
//1. array to map
//2. callback function
//then return a new array based on the result of the callback function

// Imported Function
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

// Main Function
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // empty for now :)
  //return func(arr);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test Code
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);