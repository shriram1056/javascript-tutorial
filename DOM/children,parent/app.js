// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');
console.log(result)
const allChildren = result.childNodes;// returns a list of all child nodes
console.log(allChildren);

const children = result.children;// returns a html collection of child **element** nodes only
console.log(children);
console.log(children.firstChild);//won't work in html collection

console.log(result.firstChild);
console.log(result.lastChild);

const parentbody= result.parentElement; //parent element
console.log(parentbody);
