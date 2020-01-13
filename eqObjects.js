//Imported Function
const eqArrays = require('./eqArrays');

//Main Function
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object' && object1[key] !== null && object2[key] !== null) {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

//Export Function
module.exports = eqObjects;
