//Function
const letterPositions = function(sentence) {
  const results = {};

  let i;
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }

  return results;
};

//Export Function
module.exports = letterPositions;