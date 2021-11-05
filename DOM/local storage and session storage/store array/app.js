// JSON.stringify(), JSON.parse

const friends = ['john', 'peter', 'bob'];
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[2]);

let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}
console.log(fruits);
// fruits.push('apple');
fruits.push('orange'); // this keeps adding orange to local storage when reloaded or closed and opened
localStorage.setItem('fruits', JSON.stringify(fruits));
