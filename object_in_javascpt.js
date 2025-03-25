//Arrays , functions and objects
//objects- key/value pairs methods (properties-key)
//dot notation


//in objects we can have strings,numbers,booleans,functions,properties
const person = {
    name: 'Madhu',
    lastname: 'veera',
    age:30, //number
    eduction:'B-tech',
    married:true, //boolean
    siblings:['anna','susan','peter'], //properties
    greeting(){
    console.log("helloworld");    // function 
    },
};
//dot notation
//diff ways to access

const age = person.age;    //o/p: 30
console.log(age);
person.name;
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();


