// callbacks, promises, async/await
// what if no resolve, one is rejected
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.four');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  //can use individual catch but too much repetition
  addColor(1000, heading1, 'red')
    .then(() => addColor(2000, heading2, 'green'))
    .then(() => addColor(1000, heading3, 'blue'))
    .catch((err) => console.log(err));
    // promise.then/catch.then/catch.then/catch
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
