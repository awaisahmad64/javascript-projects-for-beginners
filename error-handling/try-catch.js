/**
        Differenct type of errors in javascript
        EvalError
        RangeError
        ReferenceError
        syntaxError
        tyoeError
        URIError
        AggregateError
        JSON.parse() json to js ojb
        JSON.stringyfyl 
        **/
      // try will run, if any error occuer in try, try will terminate and catch will run show error, if we declare a variable in catch, error message store in catch variabe, we use it to show error.
      //it's only work synchonously
      try {
        console.log('try start here');
        let x = 10;
        if (x != 10) {
          throw new Error(
            ' this will go to catch show this > sorry! 10 and 11 are not equal'
          );
        }
        console.log('try end here');
      } catch (error) {
        console.log(error);
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
      } finally {
        console.log('if error has then run, not then run');
      }