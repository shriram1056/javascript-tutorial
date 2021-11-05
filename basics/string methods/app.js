// String properties and methods
// wrapper String Object, don't memorize methods
let text = ' Peter Jordan';
let result = text.length;
console.log(result);

console.log(text.length);

console.log(text.toLowerCase());

console.log(text.toUpperCase());

console.log(text[0]);

console.log(text.charAt(text.length - 1));

console.log(text.indexOf('e'));
//returns -1 if not there

console.log(text);

console.log(text.trim());
//Removes the leading and trailing white space and line terminator characters from a string.

console.log(text.trim().toLowerCase().startsWith('peter'));
// remove whitespace, change it to lowercase and check whether it will start with peter

console.log(text.includes('eter'));
// whether it have eter

console.log(text.slice(0, 2));
// start and end(not the 2nd index) - " P", if no end then from start to end of string

console.log(text.slice(-3));
// from end- dan


console.log(text.repeat(3));

//startsWith- start after first n chars
text="i hate life"
console.log(text.startsWith("hate",2));//output: true

//endsWith - end first n chars
console.log(text.endsWith("hate",6));//(output:true. "i hate"-6 chars) if 7 (output:false. "i hate "-7 chars) 