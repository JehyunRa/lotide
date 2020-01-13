//Function
const findKey = function(obj, cb) {
  for (const item of Object.keys(obj)) {
    if (cb(obj[item])) {
      return item;
    }
  }
};

//Export Function
module.exports = findKey;