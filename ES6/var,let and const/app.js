// var, let , const
// define, update, redifine
// const cannot mutate primitive type

var number = 100;// define
number = 200;// update
var number = 'orange';// redifine


let amount = 100;// define
amount = 200;// update
//no redefine


const total = 100;//only define and no update
const person = { name: 'bob' };
person.name = 'john';
console.log(person.name);
