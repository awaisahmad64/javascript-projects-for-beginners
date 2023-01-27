// inilizatied and decaralared a empty array here
var myName = ['A','W','A','I','S','','A','H','M','A','D'];
console.log(myName);
// unshift mutiple character in myName array
//while (typeof (i = myName.shift()) !== '') {
  for(let i =0; i <= myName.length; i++){ 
  if(myName[i] !== ''){
    myName.shift();
  }
  else{
    break;
  }
}
console.log(myName)