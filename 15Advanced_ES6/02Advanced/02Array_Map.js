const numbers=[3,4,6,2,5,10];


//way-1
// const doubled=[];
// for(const number of numbers){
//     const double=number*2;
//     doubled.push(double);
// }

// console.log(doubled);
//way-2

function doubleIt(number){
    console.log(number);
    return number*2;
}

const double2=x=>x*2;

//way-3:powerful way
const res=numbers.map(doubleIt);//callback function
console.log(res)

//map=> loops through each element of the array and do the each operations
//that you passed in the callback function  and hold the result each operation in an array and finally returns
//the array.

const output=numbers.map(double2);
console.log(output)
const output2=numbers.map(x=>x*2);
console.log(output2)


const nums=[12,10,15,7];
const doubled=nums.map(x=>x*2);
console.log(doubled)
const fiveBonus=nums.map(x=>x+5);
console.log(fiveBonus)
const halfed=nums.map(x=>x/2);
console.log(halfed)

const friends=["Asif","Saad","Talha"];
const length=friends.map(x=>x.length);
console.log(length)
const first=friends.map(x=>x[0]);
console.log(first)