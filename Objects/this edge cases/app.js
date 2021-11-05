// if a method from an object is called from that object's variable this keyword works
const counter = {
  count: 0,
   increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
    },
};

const btn = document.querySelector('.increment');

// fail
// btn.addEventListener('click', counter.increment); here we are passing reference to the object's method(not the object)and it btn will call the method so btn is returned 

// some edge cases
// btn.addEventListener('click', counter.increment.bind(counter));

const inrement = counter.increment.bind(counter);
btn.addEventListener('click', inrement);
// btn.removeEventListener('click', inrement);
