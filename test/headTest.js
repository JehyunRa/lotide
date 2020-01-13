//Imported Function
const assert = require('chai').assert;
const head = require('../head');

//Test Code
describe("#head", () => {
  it("returns 1 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 'hello' for ['hello', 'lighthouse', 'labs']", () => {
    assert.strictEqual(head(['hello', 'lighthouse', 'labs']), 'hello');
  });
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });
  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), 'undefined');
  });
});