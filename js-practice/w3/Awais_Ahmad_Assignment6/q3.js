var str = 'don’t know why';
function serachStr(str) {
  var strStatus = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'y') {
      strStatus = 'Yes';
    } else {
      strStatus = 'No';
    }
  }
  console.log(strStatus);
}
serachStr(str);
