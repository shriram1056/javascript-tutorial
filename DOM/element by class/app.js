// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

//The older getElementsByClassName and getElementsByTagName both return HTMLCollections. 

// getElementsByClassName('classname');

// node-list =  array-like object
// index, lenght property but not array methods

const listItems = document.getElementsByClassName('special');
listItems[1].style.color = 'blue';
