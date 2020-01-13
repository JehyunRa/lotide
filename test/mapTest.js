//Imported Function
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

//Global
const words = ["ground", "control", "to", "major", "tom"];

//Test Code
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);