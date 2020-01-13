//Imported Function
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// Test Code
assertArraysEqual(tail([1, 2, 3]), [2, 3]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([1]), []);
assertArraysEqual(tail([]), []);