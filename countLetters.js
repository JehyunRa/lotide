//Function
const countLetters = function(str) {
  const output = {};

  for (const letter of str) {
    if (letter !== ' ') {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }

  return output;
};

//Export Function
module.exports = countLetters;