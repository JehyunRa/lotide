// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😀Assertion Failed: ${actual} !== ${expected}`);
  }
};

const arrayCompare = function(a, b) {
  let i;
  console.log("comparing new set of arrays... \ncomparing array lengths:");
  assertEqual(a.length, b.length);
  if (a.length === b.length) {
    for (i = 0; i < a.length; i++) {
      console.log("comparing variable #" + i + ":");
      assertEqual(a[i], b[i]);
    }
  } else {
    console.log("array lengths are unequal");
  }
};

const tail = function(inputArray) {
  if (inputArray.length >= 1) {
    return inputArray.slice(1);
  } else {
    return [];
  }
};

// Test Code
arrayCompare(tail([1, 2, 3]), [2, 3]);
arrayCompare(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
arrayCompare(tail([1]), []);
arrayCompare(tail([]), []);