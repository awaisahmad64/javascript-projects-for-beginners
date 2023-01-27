// initializing and decalaring a string variable with name str
var str = 'Awais Ahmad';
console.log(str);
// converting string to array
var arr = str.split('');
console.log(arr);
arr.splice(5,6);
console.log(arr);
// coverting array to string
var withCommas = arr.toString();
// removing commas by using replace function with help regular expersions
const withoutCommas = withCommas.replaceAll(',' , '');

// const withoutCommas = withCommas.replace(/,/g, '');
console.log(withoutCommas);