//Basic function callback...

function basic(name, callback){
    let myname='sonu';
    console.log(`my name is ${myname} ${name}`)
    callback();
}
function myfunction(){
    console.log('how do u do...')
}
basic('raju',myfunction)

console.log('***********************');

//Anonymous function.....
//passing a function without a name(inline)

// function myfunction(a,b,callback){
//     let result= a+b;
//     callback(result);
// }
// myfunction(5, 6, function(result) {
//     console.log('sum is :', result);
// });

console.log('***********************');
//Arrow function as callback

function multiple(a, b, callback){
    let result= a*b;
    callback(result);
}
multiple(5, 5, (result)=>{
    console.log('multiple:',result);
})


// arrow
function myfunctions(x,y,callback){
    let res = x-y;
    callback(res);
}
myfunctions(100,30,(result)=>{
    console.log("Substact is: ",result)
});
console.log('***********');

// callback with setTimeout

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

console.log('**********************')

// callback with Array Methods
   //forEach

let num = [1,2,3,4,5];
 num.forEach((number)=>{
    console.log(number*2);
 })

     //map
 let numbers = [2,3,4,5];
  
 const double= numbers.map((num)=> num*2)
    console.log("double is:" + double)
 
let values = [1,2,3,4,5];
//foreach
//let add = values.forEach((num)=>num*2);
values.forEach((num)=>{
    console.log(num+1);
})
//console.log("adding with 1:" +add);
//map
let arr = [2,4,6,8];
let mult = arr.map((num)=>num*2);
console.log("multiple:" +mult)

console.log('*******************')
// callback in Event Handling
// document.getElementById('btn').addEventListener('click',function(){
//     console.log('Button Clicked')
// })







