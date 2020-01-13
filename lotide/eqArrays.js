//Function
const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;

  let i;
  for (i = 0; i < arrA.length; i++) {
    if (Array.isArray(arrA[i]) && Array.isArray(arrB[i])) {
      if (!eqArrays(arrA[i], arrB[i])) {
        return false;
      };
    } else if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
};

//Export Function
module.exports = eqArrays;
