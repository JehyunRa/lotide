//Imported Function
const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

//Global
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  few: "More"
};

//Test Output
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);