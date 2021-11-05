// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects first match and doesn't care about the rest
// querySelectorAll('any css') - selects all

//querySelector and getElementById both return a single element. query selector is not live or static

//querySelectorAll and getElementsByName both return NodeLists, being newer functions that were added after HTMLCollection went out of fashion. 

// getElement* calls return direct references to the DOM, whereas querySelector* internally makes copies of the selected elements before returning references to them. These are referred to as "live" and "static" collection respectively.

//Changes to live collections apply immediately - changing a live element changes it directly in the DOM, and therefore the very next line of JS can see that change, and it propagates to any other live collections referencing that element immediately.
// Changes to static collections are only written back to the DOM after the current script is done executing.

const result = document.querySelector('#result'); //for id
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special'); //for class-select first special class
// console.log(item);

const lastItem = document.querySelector('li:last-child'); //for tags
// console.log(lastItem);

const list = document.querySelectorAll('.special');

list.forEach(function(item) {
  console.log(item);
  item.style.color = 'yellow';
});
