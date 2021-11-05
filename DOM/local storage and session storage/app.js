// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem , removeItem, clear

//localStorage is similar to sessionStorage, except that data stored in localStorage has no expiration time, while data stored in sessionStorage gets cleared when the browsing session ends (i.e. when the browser / browser tab is closed)

// localStorage.setItem('name','john')
// sessionStorage.setItem('name','john')
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');

const name = localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName);
localStorage.clear();
