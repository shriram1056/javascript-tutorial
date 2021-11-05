// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // for preventing the action 
  console.log('form submitted');
  console.log(name.value);//The value of an input element is available from its value property.not node
  console.log(password.value);
});
