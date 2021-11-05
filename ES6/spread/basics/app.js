// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const udemy = 'udemy';
const letters = [...udemy];
console.log(...udemy)
//...udemy = "u","d","e","m","y"
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
console.log(friends);//result: ['john', 'peter', 'bob','arnold','susan', 'anna']

// const newFriends = [...friends];
// reference-changes it at memory instead of copy
const newFriends = friends;
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);
