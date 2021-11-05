// Destructuring
// faster/easier way to access/unpack values from arrays
// elements into variables
// Arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

// the below are variables for friends[0] friends[1](no variable skipped) friends[2] friends[3] friends[4] 
const [john, , enemy, bob, susan] = friends;//john is a variable.this is a variable declaration and assignment of multiple variable at once
console.log(john, enemy, bob, susan);
console.log(john)
