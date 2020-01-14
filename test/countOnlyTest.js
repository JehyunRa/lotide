//Imported Function
const assert = require('chai').assert;
const countOnly = require('../countOnly');

//Global
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//Code Test
describe("#countOnlyTest", () => {
  it(`returns 1 for firstNames, { "Jason": true, "Karima": true, "Fang": true })["Jason"`, () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Jason"], 1);
  });
  it(`returns 1 for firstNames, { "Jason": true, "Karima": true, "Fang": true })["Karima"`, () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Karima"], undefined);
  });
  it(`returns 1 for firstNames, { "Jason": true, "Karima": true, "Fang": true })["Fang"`, () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Fang"], 2);
  });
});