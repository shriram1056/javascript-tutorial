// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
you can't set a property name as variable
*/
//a object is created when it is assigned to a variable

// object literal syntax,{}
// dot notation

const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};

console.log(person.name);

const name = person.name;
console.log(name);
person.age = 60;
person.city = 'chicago';
console.log(person)
// delete property
// delete person.siblings;
const siblings = delete person.siblings;
console.log(siblings);

// console.log(person.sayHello(name)); Error:don't log in a console log
person.sayHello(name);