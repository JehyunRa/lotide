//Imported Function
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

//Code Test
console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('hello'));
console.log("\n...asserting arrays...\n");
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);