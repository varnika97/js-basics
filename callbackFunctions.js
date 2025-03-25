// callback functions, Higher Order Functions, Functions as First class Objects/Citizens

//Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)
 
//Higher Order function - accepts another function as an argumet or returns another function as a result

//callback function - passed to a another function as an argument and executed inside that function


function myFunction(name,callback){
    let myname = 'john';
    console.log(`my name is ${name} ${myname}`);
  callback();
}
function morning(){
    console.log('Good morning');
}
function afternoon(){
    console.log('Good afternoon');
}
function evening(){
    console.log('Good evening');
}

myFunction('jassu', morning);
myFunction('madu', afternoon);
myFunction('tillu', evening);


// function morning(){
//     console.log('my name is ${myname}');
// }
// function afternoon(){
//     console.log('Good Afternoon');
// }
// function myfunction(name,callback){
//     let myname = 'john';
//     console.log('Good morning' +name);
//     callback();
// }

// myfunction('jassu', morning);
// myfunction('madhu', afternoon);