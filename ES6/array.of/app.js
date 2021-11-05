// Array.from and Array.of - NOT ON THE PROTOTYPE(parent)
// Array.from
// Array.of
// of creates a new Array instance from a variable number of arguments.

const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

const friends = Array.of('john', 2, true);//make an array from parameter
console.log(friends);
