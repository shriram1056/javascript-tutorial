// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
//The problem with your code is that the your script is executed prior to the html element being available.

const container = document.querySelector('.container');
console.log(container);
const btn = document.querySelector('.btn');
let heading = document.querySelectorAll('heading');// change this to getclassname. this where getelement* shines

function sayHello() {
  console.log('hello there');
}

btn.addEventListener('click', function() {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `i'm inside container`;
  container.appendChild(element);
  console.log(heading.length)
});

container.addEventListener('click', function(e) {
  if (e.target.classList.contains('heading')) {
    console.log('hello');
  }
});

// heading.addEventListener('click', sayHello);
