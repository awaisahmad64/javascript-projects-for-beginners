// initialing and decalaring a string variable a 
var a = 'Awais';
// converting string into array using splite function
var arr = a.split('');
console.log(arr);
// reversing array
var rev = arr.reverse();
//converting array to string using function toString()
var str = rev.toString();
// const withoutCommas = str.replace(/,/g, '');
console.log(str.replaceAll(',',''));
