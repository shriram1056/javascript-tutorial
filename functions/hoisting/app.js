// Hoisting
// function and var declarations are hoisted i.e.they can be access even before they are createcd
// safer to access only after initialized

display();//display is defined below.but we can still access this
moreComplex();
console.log(display);
console.log(moreComplex);
// console.log(firstName);
// console.log(lastName);
// console.log(random);

const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(` ${random}`);
}
