//params - when declare/define
//placeholders, local vars
//arguments- when invoke/call/run
//use vars/values, multiple params, undefined

//params - when declare/define

function helloBob(){
      //logic
      console.log('Hello there Bob');
}
function helloJohn(){
    //logic
    console.log('Hello there john');
}
function helloSusy(){
    //logic
    console.log('Hello there Susy');
}
    
  
  hello(); // invoke
  //after invoke the function only the logic in function runs and execute
//Note: insted of having 3 consoles in function body we can have just one how ever it's need change

//greet bob
helloBob();
//greet john
helloJohn();
//greet susy
helloSusy();

//Note: for every time creating new function for single console log is not better of using it instead of this we use parameters and arguments..

// ........OR...........


//params - when declare/define
//placeholders, local vars

function greet(name){
    console.log("Hello there " + name); 
}
//greet Bob
greet('Bob');
//greet John
greet('John');
//greet Susy
greet('Susy');

//Note: above function..instead of having 3 seperate functions with 3 seperate names now we can setup only one function  using myplaceholedr local variables