// synchronous means that code is executed line by line, inorder..
// if the function take long time to execute it will block the execution of code

console.log('start');

function myfunction(a,b){
    return a+b;
}
const result= myfunction(5,6);
console.log('Result:' + result)
console.log('End')