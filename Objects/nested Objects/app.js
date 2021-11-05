// nested objects
// set variable as property value
// dot notation vs bracket notation

const age = 40;
let random = 'random-value';
random = 'age';
const person = {
  name: 'john',
  age: age,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'coding addict',
      address: '123 main street',
    },
  },
  'random-value': 'random',//string property value
};

console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);
console.log(person["name"]);
//unlike . you can't access properties without ""
console.log(person['random-value']);

console.log(person[random]);// you can access property with variables or string in bracket
console.log(person.random)//this wont work in dot
