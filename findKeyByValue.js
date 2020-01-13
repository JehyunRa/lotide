//Global
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  few: "More"
};

//Imported Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😀Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Main Function
const findKeyByValue = function(obj, val) {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === val) return key;
  }
  return undefined;
};

//Test Output
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);