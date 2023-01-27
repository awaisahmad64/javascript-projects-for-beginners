var array = [1, 1, 1, 1, 1, 1, 1, 1,2];
var evenCount = 0,
  oddCount = 0;
function checkEven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      evenCount++;
      if (evenCount == array.length) {
        console.log('Array Elements are Even.');
      }
    }
    if (array[i] % 2 != 0) {
      oddCount++;
      if (oddCount == array.length) {
        console.log('Array Elements are Odd.');
      }
    }
  }
  return { evenCountObj: evenCount, oddCountObj: oddCount };
}
var mixArray = checkEven(array);
if (mixArray.evenCountObj > 0 && mixArray.oddCountObj > 0) {
  console.log('Array Elements are Mixed.');
}
