// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😀Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(inputArray) {
  if (inputArray.length > 0) {
    return inputArray[0];
  } else {
    return "undefined";
  }
};

// Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), "undefined");