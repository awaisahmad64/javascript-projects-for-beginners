'use strict';
      try {
        const person = {
          firstName: 'Awais',
          lastName: 'Ahmad',
          fullName: function (city = Sahiwal, country = Pakistan) {
            console.log(
              this.firstName +
                ' ' +
                this.lastName +
                ' from ' +
                city +
                ', ' +
                country
            );
          },
        };
        const intNumber = 10;
        if (intNumber != 11) {
          throw new Error('10 != 11. due this is throw ');
        }
        const personOne = {
          firstName: 'Fazal',
          lastName: 'Karim',
        };
        const personTwo = {
          firstName: 'Asif',
          lastName: 'Bashir',
        };
        person.fullName();
        person.fullName.call(personOne, 'Sahiwal', 'Pakistan');
        person.fullName.apply(personTwo, ['Layyah', 'Pakistan']);
        //apply method will take arguments as an array
      } catch (error) {
        // try error show in display, here we defined error variable to store error message
        console.log(error.name); //  error.name will show error type
        console.log(error.message); // this will show error message
        //console.log(error.stack);  like defualt error but differnece is not red
      } finally {
        console.log('if try has error or not i want to use finally');
      }