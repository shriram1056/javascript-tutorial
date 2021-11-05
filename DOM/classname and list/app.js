// className
// classList
//Using "classList", you can add or remove a class without affecting any others the element may have. But if you assign "className", it will wipe out any existing classes while adding the new one (or if you assign an empty string it will wipe out all of them).

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// const classValue = first.className;
// console.log(classValue);

second.className = 'colors text';

// third.classList.add('colors');
// third.classList.add('text');
third.classList.add('text', 'colors');
third.classList.remove('text');

let result = third.classList.contains('colors');
if (result) {
  console.log('hello world');
} else {
  console.log('does not have the class');
}

const classValue = third.classList;
console.log(classValue);
