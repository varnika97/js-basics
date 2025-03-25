// console.log("start");

// function myFunction(name,callback){
//     setTimeout(()=>{
//         console.log('Hello', +name);
//         callback();
//     },2000)
//     function morning(){
//         console.log('good morning');
//     }
    
// }

// myFunction('jassu', morning);
// myFunction('jassu' , timer)

function greeting(name, callback){
    setTimeout(() => {
        console.log('Hello', +name);
    callback();
},3000);
}
function aftergreeting(){
    console.log("I wanted to meet You...");
}

greeting("Nani",aftergreeting);