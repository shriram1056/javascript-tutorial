// nodeValue 
// textContent
//<p>, <div>, <section>, etc. are treated as "element" nodes, but comments are "comment" nodes, "text" objects are "text nodes" & line-breaks are also classified as "text nodes".
//When representing HTML elements (DOM Objects) in JavaScript, everything is a node - - even the text within an element.
//So when you got a reference to an <li>, that <li> wasn't the node that contained the name, it was the child text node of that <li>

const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
//item.firstchild is the text node in h1.
console.log(value);

const easyValue = item.textContent;
console.log(easyValue);
