//expressions - another way define a function
//creste s vsrisble, assign to FUNCTION (not value), use var
// diff - hosting, use - arrow functn, libraries,



//function declaration/defination
function addValues(num1, num2){
    return num1 + num2;
}

const firstValue = addValues(3,4);
const secondValue = addValues(12,34);

//function expression

const add= function(num1, num2){
    return num1 + num2;
}

const thirdValue = add(5,6);
const values = [firstValue, secondValue, thirdValue];
console.log(values);

//when to use function declaration and function expression 

//arrow function

const multiple = (num1, num2) => num1 * num2;

// libraries

exports.nameOFMethod = function(){
    
}