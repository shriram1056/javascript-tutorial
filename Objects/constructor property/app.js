// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const john = new Person('john', 'sanders');
console.log(john.constructor);//returns Person(firstName, lastName) which created this

const bob = {};
console.log(bob.constructor);//returns Object() built-in function to create objects
const list = [];
console.log(list.constructor);//returns Array() built-in function to create array
const sayHi = function () {};
console.log(sayHi.constructor);//returns Function() built-in function to create function

const susy = new john.constructor('susy', 'carpenter');//All Objects in Javascript have access to constructor property that returns a constructor function that created it.
susy.fullName();
