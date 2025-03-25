// Global Scope Vs Local Scope
// any variable outside code block {} is said to be in global Scope
//can be access anywhere in the program
//Gotchas : name collosions, modify by mistake

let name = 'bobo';
  name = 'peter' ;
  console.log(name); //global scope so we can access inside function
  
  function calculate(){
    console.log(name);
    name = 'orange';
     function inner(){  // function with in the function
        name = 'inner name value';
        console.log(`this is from inner function ${name}`);
            
     }//inner() : void
     inner();
   
  }
  calculate();
   
   if(true) {
    console.log(name);
    name = 'pants';
   }
   console.log(`my name is ${name} and I'm awesome`);



