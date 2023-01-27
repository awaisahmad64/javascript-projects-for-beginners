// initializing and decalaring a string variable str
var str = 'Awais Ahmad'
// log string
console.log(str);
// convert string to array
var arr = str.split('');
// log array
console.log(arr);
// slcing array
var arrSlice = arr.slice(6,11);
// agina coverting array to string
var strAgain = arrSlice.toString();
// replacing commas and log string
console.log(strAgain.replaceAll(',' , ''));