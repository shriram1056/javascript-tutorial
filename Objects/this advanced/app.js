/* In Regular Functions (not arrow) "this" is
determined by "HOW"!!! a function is called (left of .)

if there is nothing in the left it defaults is global - window
arrow functions - pump the breaks
*/

// console.log(this);

function showThis() {
  console.log(this);// this returns a window as the whole java script is in one of the window property
}

const john = {
  name: 'john',
  showThis: showThis,
};
const bob = {
  name: 'bob',
  showThis: showThis,
};

john.showThis();//returns john since the method from an object is called from that object's variable 
bob.showThis();//return bob since the method from an object is called from that object's variable 

showThis();//gives window
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis);//return button because the function is called by btn
btn2.addEventListener('click', showThis);//return button
btn2.addEventListener('click', function () {
  //return window
  showThis();
});
