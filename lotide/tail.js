//Function
const tail = function(inputArray) {
  if (inputArray.length >= 1) {
    return inputArray.slice(1);
  } else {
    return [];
  }
};

//Export Function
module.exports = tail;
