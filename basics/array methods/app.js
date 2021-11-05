// Array Properties and Methods
let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

//length
console.log(names.length);
console.log(names[names.length - 1]);

// concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse- reverses the original array.
console.log(allNames.reverse());

//unshift
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);

//shift
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

//push
allNames.push('susy');
console.log(allNames);

//pop
allNames.pop();
// allNames.pop();
console.log(allNames);

// splice - removes from original array
const specificNames = allNames.splice(0, 3);
// start and numbers of elemnts from start
console.log(specificNames);
console.log(allNames);

//The join() method returns the array as a string.
//The elements will be separated by a specified separator. The default separator is comma (,).
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join('');//or specify here
console.log(energy);

//slice()	Selects a part of an array, and returns the new array.syntax: start, stop before
console.log(fruits.slice(0,2));

//!values.includes(item.category) return boolean

//