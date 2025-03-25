function myfunction(name, callback){
    setTimeout(()=>{
        console.log("Hello", + name);
        callback();
    },3000);
}
function basic(){
    console.log("I Love You...");
}
myfunction("Nani", basic);