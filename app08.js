var person = new Object();

person['firstname'] = 'Johnny';
person['lastname'] = 'Depp';

console.log(person);
console.log(person.firstname);
console.log(person['firstname']);

person.address = new Object();
person.address.street = '111 Main Street';
person.address.state = 'USA';
person.address.city = 'NY';

console.log(person);