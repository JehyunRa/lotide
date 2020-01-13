//Function
const takeUntil = function(array, callback) {
  result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item)
    } else {
      return result;
    }
  }
};

//Export Function
module.exports = takeUntil;