// default parameters, arrow function gotchas

const john = 'John';
const peter = 'Peter';

sayHi();
function sayHi(person = 'Susan') {
  console.log(`Hi ${person}`);
}
sayHello(peter);
const sayHello = (person = 'BOB') => console.log(`Hello ${person}`);
//hoisting doesn't work with arrow fucntion


