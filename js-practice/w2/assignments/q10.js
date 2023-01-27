// Expeted output "“The Slow Green Turtle, Wins the Race"
// initializing and declaring a string
var str = 'The Quick Brown Fox, Jumps Over the Lazy Dog';
var replace = str.replaceAll('Quick','Slow')
.replaceAll('Brown','Green')
.replaceAll('Fox','Turtle')
.replaceAll('Jumps','Wins')
.replaceAll('Dog','Race')
.replaceAll('Lazy','')
.replaceAll('Over','');
console.log(replace);