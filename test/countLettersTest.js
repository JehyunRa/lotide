//Imported Function
const assert = require('chai').assert;
const countLetters = require('../countLetters');

//Code Test
describe("#countLettersTest", () => {
  it(`returns 1 for (countLetters("lighthouse in the house")['l']`, () => {
    assert.deepEqual(countLetters("lighthouse in the house")['l'], 1);
  });
  it(`returns 2 for (countLetters("lighthouse in the house")['i']`, () => {
    assert.deepEqual(countLetters("lighthouse in the house")['i'], 2);
  });
  it(`returns 1 for (countLetters("lighthouse in the house")['g']`, () => {
    assert.deepEqual(countLetters("lighthouse in the house")['g'], 1);
  });
  it(`returns 4 for (countLetters("lighthouse in the house")['h']`, () => {
    assert.deepEqual(countLetters("lighthouse in the house")['h'], 4);
  });
  it(`returns 2 for (countLetters("lighthouse in the house")['t']`, () => {
    assert.deepEqual(countLetters("lighthouse in the house")['t'], 2);
  });
});