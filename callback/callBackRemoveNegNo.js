const number = [1, 2, 3, 5, 6, -12, -4, 34, 54, -9];
const removeNegResult = removeNeg(number, (x) => x >= 0);
console.log(removeNegResult);
function removeNeg(number, callback) {
  const array = [];
  for (const x of number) {
    if (callback(x)) {
      array.push(x);
    }
  }
  return array;
}