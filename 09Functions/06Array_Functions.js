function sumNumbers(numbers) {
    console.log(numbers);
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
function allEven(numbers) {

    let evens = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }

    }
    return evens;

}

function sumEvens(numbers){
    let sum=0;
    for(let number of numbers){
        if(number%2===0){

            sum+=number;
        }
    }
    return sum;

}


let arr1 = [54, 62, 12, 6];
const sum = sumNumbers(arr1);
console.log(sum);

let even = allEven(arr1);
console.log(even);

let sumEven=sumEvens(arr1);
console.log(sumEven);