//return
// default undefined, shortcuts, igonres after


const wallHeight= 80;
function calculate(value){
    console.log('the value in cm is:'+value*2.54);
}

const width = calculate(100);// assigning value as 100
const height = calculate(wallHeight); // we can call variable also

const dimensions = [width, height];

console.log(dimensions);

// now the output will be 
//  the value in cm is: 254
//  the value in cm is : 203.2
//  [undefined, undefined] to overcome this we can call return 

const wallhHight= 80;
function calculate(value){
    const newvalue=value*2.54;
    return newvalue;
}
const width = calculate(100); // assigning value  as 100
const height= calculate(wallHeight); // we can call variable also

const dimensions = [width, height];

console.log(dimensions);
//output:
// [254,203.2]
// after return stmnt if v have 100 lines of a code it wont execute bcz the excution stops until return