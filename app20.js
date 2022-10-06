var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullname: function () {
      return this.firstname + ' ' + this.lastname;
    },
  };
  
  var jack = {
    firstname: 'Jack',
    lastname: 'Sparrow',
  };
  
  // you should never do this
  jack.__proto__ = person;
  console.log(jack.getFullname());
  
  // let us look at the correct way
  // to create objects in javascript
  
  var jackc = Object.create(person);
  jackc.firstname = 'Will';
  jackc.lastname = 'Turner';
  console.log(jackc.getFullname());
  console.log(jackc);