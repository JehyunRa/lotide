//Imported Function
const assertObjectsEqual = require('../assertObjectsEqual');

//Global
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

//Code Test
assertObjectsEqual(ab, ba); //pass
assertObjectsEqual(ab, abc); //fail
assertObjectsEqual(cd, dc); //pass
assertObjectsEqual(cd, cd2); //fail