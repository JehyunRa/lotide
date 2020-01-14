//Function
const map = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
};

//Export Function
module.exports = map;