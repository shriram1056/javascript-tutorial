// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// node-list =  array-like object
// index, lenght property but not array methods

//document is html document. everything we do in our website is controlled by window object.document is in this

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');

//The older getElementsByClassName and getElementsByTagName both return HTMLCollections. 
//HTMLCollections are not as array-like as NodeLists and do not support .forEach().

// items.forEach(function(item) {
//   console.log(item);
// }); // won't work

items[2].style.color = 'orange';
const betterItems = [...items];

betterItems.forEach(function(item) {
  // console.log(item);
});

console.log(items);
//returns html collection
console.log(betterItems);
// returns array