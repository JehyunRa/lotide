//Functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😀Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const output = {};

  for (const letter of str) {
    if (letter !== ' ') {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }

  return output;
};

//Code Test
const result = (countLetters("lighthouse in the house"));

//Verification
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);