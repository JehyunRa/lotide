//Imported Function
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

//Global
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

//Test Code
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);