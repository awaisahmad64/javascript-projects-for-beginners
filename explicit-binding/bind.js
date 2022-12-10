// bind is similer to call but it bind with object and return copy of the method
// create an object with name person
const person = {
  firstName: 'Awais',
  lastName: 'Ahmad',
};
// create method with name fullname and pass default parameters
const fullName = function (city = 'Sahiwal', country = 'Pakistan') {
  console.log(
    this.firstName +
      ' ' +
      this.lastName +
      ' From ' +
      city +
      ', ' +
      country +
      '.'
  );
};
// now time to binding or function borrowing
const fullNameResult = fullName.bind(person);
fullNameResult();
// output will be: Awais Ahmad From Sahiwal, Pakistan.
// now again calling borrowing method will passing arguments
const fullNameArg= fullName.bind(person, 'Lahore', 'Pakistan');
fullNameArg();
// now output will be: Awais Ahmad From Lahore, Pakistan.
