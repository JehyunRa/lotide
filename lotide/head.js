//Function
const head = function(inputArray) {
  if (inputArray.length > 0) {
    return inputArray[0];
  } else {
    return "undefined";
  }
};

//Export Function
module.exports = head;
