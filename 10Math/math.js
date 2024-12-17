//Math is an object

// const math={
//     min: function min(num1,num2){
//         if(num1>num2){
//             return num1;
//         }
//         else{
//             return num2;
//         }
//     }
// }

// console.log(math.min);
// console.log(math.min);

console.log(typeof(Math));
const min=Math.min(45,1,56,99,123,21);
const max=Math.max(45,1,56,99,123,21);
const abs=Math.max(45,1,56,99,123,21);
const pi=Math.PI;

console.log(min);
console.log(max);
console.log(pi);
console.log(Math.abs(-88));
console.log(Math.abs(5-10));
//round->goes closest
console.log(Math.round(4.8));
console.log(Math.round(4.2));
console.log(Math.round(2.85));

//forcefully round->floor
console.log(Math.floor(2.95));
console.log(Math.floor(2.99995));
console.log(Math.floor(2.11));


//forcefully round->ceil
console.log(Math.ceil(2.99995));
console.log(Math.ceil(2.000001));

console.log(Math.random());//0-1 random number fractional
console.log(Math.random()*10);//0-10
const rand=Math.round(Math.random()*10);
console.log(Math.random()*10);//0-10
console.log(rand);

