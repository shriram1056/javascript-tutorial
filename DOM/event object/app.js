// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

heading.addEventListener('click', event => {
  console.log(event.currentTarget); //     <h1>some heading</h1>
  console.log(this);
});

btn.addEventListener('click', function(event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type); // type of event- click key
});

function someFunc(e) {
  e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. e.g. Clicking on a link, prevent the link from following the URL
}

link.addEventListener('click', someFunc);
