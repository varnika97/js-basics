function myfunction(name, callback){
    setTimeout(()=>{
        console.log("Hello" + name);
        callback();
    },4000);
}
function basic(){
    console.log("I Love You...");
}
myfunction(" Nani", basic);