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
fullName.call(person);
// output will be: Awais Ahmad From Sahiwal, Pakistan.
// now again calling borrowing method will passing arguments
fullName.call(person, 'Lahore', 'Pakistan');
// now output will be: Awais Ahmad From Lahore, Pakistan.
