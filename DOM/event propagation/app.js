// event propogation - order the events are fired
// event bubbling - clicked element first then the event object bubbles up -- default
// event capturing - fires at the root and fires until reaches target opposite of bubbling used if {capture:true} .window.addEventListener('click', showBubbling, { capture: true });

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
  console.log('current target', e.currentTarget);
  console.log('target', e.target);
  if (e.target.classList.contains('link')) {
    console.log('you clicked on the link');
  }
}
function stopPropogation(e) {
  e.stopPropagation(); // this stop event object(e) from propagting up the inheritance tree
}

list.addEventListener('click', stopPropogation);
//change to showBubbling. to see the bubbling
container.addEventListener('click', showBubbling);
document.addEventListener('click', showBubbling);
window.addEventListener('click', showBubbling);
