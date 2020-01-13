//Function
const middle = function(arr) {
  let rtArr = [];
  if (arr.length < 3) return rtArr;
  if (arr.length % 2 === 0) {
    rtArr.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  } else {
    rtArr.push(arr[(arr.length - 1) / 2]);
  }
  return rtArr;
};

//Export Function
module.exports = middle;
