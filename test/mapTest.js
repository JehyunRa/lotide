//Imported Function
const assert = require('chai').assert;
const map = require('../map');

//Test Code
describe("#mapTest", () => {
  it(`returns ['g', 'c', 't', 'm', 't'] for ["ground", "control", "to", "major", "tom"], word => word[0]`, () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], x => x[0]), ['g', 'c', 't', 'm', 't']);
  });
});