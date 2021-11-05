// Arrow Functions or Fat Arrow Functions
// no name
// no function keyword
// parameters and return statement
//no parameters

const hello = () => console.log("hello");//no need to define function name or use function keyword
hello();

const double = value => value * 2;//no need to use return or brackets for a single statement and argument respectively
const num = double(4);
console.log(num);

// two parameters and more than one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  // more code here
  return result;
};
const sum = multiply(3, 4);
console.log(sum);

// return object
const object = () => ({ name: "bob", age: 25 });
const person = object();
console.log(person);

// arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter(number => number > 2);
console.log(big);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("you clicked me"));
