//String properties and methods
//wrapper string object, don't memorize methods
// strings are zero index based

let text = 'Peter Jordan';
let result = text.length;
console.log(result);

console.log(text.length());
console.log(text.toLocaleLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0)); //1st letter of text
console.log(text.charAt(text.length - 1)); // last letter of the text
console.log(text.indexOf('t'));
console.log(text.trim()); // removes the white space before starting the string
console.log(text.startsWith('peter'));//true
console.log(text.includes('eter'));
console.log(text.slice(0,2)); //p
console.log(text.slice(-3)); //dan  last 3 letters