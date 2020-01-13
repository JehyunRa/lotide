//Function
const without = function(source, itemRemove) {
  let i, j;
  for (i = 0; i < source.length; i++) {
    for (j = 0; j < itemRemove.length; j++) {
      if (source[i] === itemRemove[j]) source.splice(i, 1);
    }
  }
  return source;
};

//Export Function
module.exports = without;