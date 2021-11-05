// callbacks, promises, async/await
// PROMISES status - Pending, Resolved, Rejected
// then catch - pass another callback
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {});

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve([1, 2, 4]); //success
  } else {
    reject(`there was a error, value is false`);//fail
  }
});

// whether then or catch will be used depends on what is being thrown from Promise object
promise
  .then((taco) => { //then- will catch whatever in resolve(whatever)
    console.log(taco);
  })
  .catch((err) => { //catch- will catch whatever in reject(whatever)
    console.log(err);
  });
//OUTPUT: in the above example catch will execute because reject is being thrown in Promise