// Arrays, Functions and Objects
// expressions - another way define a function
//function return undefined by default
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func,libraries,

// function expression- function can have name for function but is redundant
const add = function (num1, num2) {
  return num1 + num2;
};
// const thirdValue = add(5, 6);
const values = [firstValue, secondValue, add(5, 6)];
console.log(values);

const multiply = (num1, num2) => num1 * num2;
