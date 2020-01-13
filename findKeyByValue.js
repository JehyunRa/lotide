//Function
const findKeyByValue = function(obj, val) {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === val) return key;
  }
  return undefined;
};

//Export Function
module.exports = findKeyByValue;