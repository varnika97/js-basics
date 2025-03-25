// array properties and methods

let names = ['john','bobo','barry','olga', 'ben' ];

//length property
console.log(names.length);
console.log(name[name.length-1]);

//concat Method
const lastNames = ['pepper', 'onion' ,'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse Method
console.log(allNames.reverse());

//unshift Method (it add one element)
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);

//shift Method (it deletes 1st item in array)

allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();

console.log(allNames) //it deletes 1st 4 from list

//push (similar to unshift)
allNames.push('jassu');
console.log(allNames);
//pop (similar to shift)
allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);

//splice Method - mutates original array
//index no.2 and 1 for how many items to be remove
const specificNames = allNames.splice(2,1);
console.log(specificNames);
console.log(allNames);



