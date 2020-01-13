//Imported Function
const eqObjects = require('./eqObjects');

//Main Function
const assertObjectsEqual = function(objA, objB) {
  const inspect = require('util').inspect;
  if (eqObjects(objA, objB) === true) {
    console.log(`😀Assertion Passed: ${inspect(objA)} === ${inspect(objB)}`);
  } else {
    console.log(`😀Assertion Failed: ${inspect(objA)} !== ${inspect(objB)}`);
  }
};

//Export Function
module.exports = assertObjectsEqual;