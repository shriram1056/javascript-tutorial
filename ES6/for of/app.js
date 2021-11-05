// for of - loops through the values of an iterable object
// String, Array,Map,Set etc  - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (const letter of longName) {
  //every letter in string
  if (letter === ' ') {
    continue;//if  this statement is invoked then go back to the for loop and instead of going through closed curly braces
  } else {
    shortName += letter;
  }
}
// console.log(shortName);

for (const fruit of fruits) {
  if (fruit === 'banana') {
    // break;
    continue;
  }
  console.log(fruit);//this won't work if the fruit ===banana
}
