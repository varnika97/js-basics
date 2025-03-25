// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++)
    {
        total += arr[i];
    }
    if (total > 100){
        console.log('u r spending way too much');
        return total;
    }
    console.log(' u r good total is less than 100');
    return total;

}
const gastotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal(200, 4000, 200, 1);
 console.log({ gas: gastotal, food: foodTotal, random: randomTotal});
 