//Imported Function
const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;

  let i;
  for (i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }

  return true;
};

const assertArraysEqual = function(arrA, arrB) {
  let a = arrA;
  let b = arrB;
  if (eqArrays(a, b) === true) {
    console.log('😀Assertion Passed: ', a, ' === ', b);
  } else {
    console.log('😀Assertion Failed: ', a, '!== ', b);
  }
};

//Function
const takeUntil = function(array, callback) {
  // ...
  result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item)
    } else {
      return result;
    }
  }
};

//Global
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

//Output
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
