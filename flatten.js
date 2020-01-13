//Function
const flatten = function(arr) {
  let i, j;
  let flat = [];
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (j = 0; j < arr[i].length; j++) {
        flat.push(arr[i][j]);
      }
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
};

//Export Function
module.exports = flatten;