const xhr = new XMLHttpRequest();
//start http request

xhr.open('GET', './api/sample.txt'); // when server send info to browser,it can only be text

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const text = document.createElement('p');
    text.textContent = xhr.responseText;//response from server
    document.body.appendChild(text);
  } else {
    console.log({
      status: xhr.status,
      //404:can't find resource and 200:success
      text: xhr.statusText,
      //message
      state: xhr.readyState,
    });
  }
};
//onreadystatechange is the function to be executed when the readyState changes.

xhr.send();
console.log('hello world');


//value	State	Description
// 0	UNSENT	Client has been created. new XMLHttpRequest(); 
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

//AJAX
//Update a web page without refreshing the page
//Request data from a server - after the page has loaded
// Receive data from a server - after the page has loaded
// Send data to a server - in the background

//AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without refreshing the whole page.

//how AJAX works: https://www.w3schools.com/xml/ajax.gif

//.open(method, url[, async[, user[, password]]]) //async by default:true