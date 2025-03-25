
//Reference  Vs Value
//Primitive Data Types
//String,Number,Boolean,Null,Undefined,Symbol,
//objects or Non-Primitive Type
//Arrays, Functions, Objects

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value.

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const number = 1;
let number2 = number;
number2 = 8;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);


// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

//object

let person = {name: 'bob'};
let person2 = person;
person2.name = 'sussy';
console.log(`first person is ${person.name}`);
console.log(`second person is ${person2.name}`);

//if we change the person2 as upper one like number2=8 it will accept 8 in primitive data types it won't change the entire values but in objects we change the person2 it won't accept it will change the entire refernce.

//to overcome the above problem we have to write means the object output is dispalying person name and person2 name is same as sussy
 
// to display write values we have to write person2 = {....person}

let person2 = {...person};