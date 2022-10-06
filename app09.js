var person = {}; // object literal notation
console.log(person);

person = { firstName: 'Max', lastName: 'Fingerbowl' };
console.log(person);

var johnny = {
  firstname: 'johnny',
  lastname: 'walker',
  address: {
    street: '111 main street',
    city: 'USA',
    state: 'NY',
  },
};
console.log(johnny);

function greet(person) {
  console.log('Hi ' + person.firstname + ' ' + person.lastname);
}

greet(johnny);
greet('X');

greet({
  firstname: 'Mary',
  lastname: 'Wilson',
});

console.log(johnny);
console.log(JSON.stringify(johnny));

var jsonstring =
  '{"firstname":"Max","lastname":"Johnson","address":{"street":"111 main street","city":"NJ","state":"USA"}}';
var max = JSON.parse(jsonstring);
console.log(max);