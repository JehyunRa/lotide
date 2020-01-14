//Imported Function
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

//Global
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  few: "More"
};

//Test Output
describe("#findKeyByValueTest", () => {
  it("returns 'drama' for bestTvShowsByGenre, 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("returns 'undefined' for bestTvShowsByGenre, 'That '70s Show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'That \'70s Show'), undefined);
  });
});