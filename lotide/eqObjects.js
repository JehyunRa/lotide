//Global
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

//Imported Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😀Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Main Function
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  let i;
  for (i = 0; i < keys1.length; i++) {
    if (object1[keys1] !== object2[keys1]) return false;
  }
  return true;
};

//Code Test
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false