//Template Literals - ES6+
// Backtick charaters `` - above tab (left from one)
//Interpolation ${} - insert expression(value)

const name = 'john';
const age = 40;
const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';

//insted of above one v use template literal which is useful in html DOM

const value = ` Hey it's ${name} and he is ${age} years old. And here is some simple math ${ 4 + 4 }`;

console.log(value);