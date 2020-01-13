//Imported Function
const eqArrays = require('./eqArrays');

//Function
const assertArraysEqual = function(arrA, arrB) {
  let a = arrA;
  let b = arrB;
  if (eqArrays(a, b) === true) {
    console.log('😀Assertion Passed: ', a, ' === ', b);
  } else {
    console.log('😀Assertion Failed: ', a, '!== ', b);
  }
};

//Export Function
module.exports = assertArraysEqual;