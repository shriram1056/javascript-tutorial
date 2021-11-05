// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color = 'red'); // white space element
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);

//The difference between this property and nextSibling, is that nextSibling returns the next sibling node as an element node, a text node or a comment node, while nextElementSibling returns the next sibling node as an element node (ignores text and comment nodes).
const second1 = document.querySelector('#second');
second1.nextElementSibling.style.color="green";
