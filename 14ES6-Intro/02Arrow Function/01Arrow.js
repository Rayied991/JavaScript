//functin declaration
// function add(a,b){
//     const res=a+b;
//     return res;
// }normal function
function add(a,b){
    return a+b; 
}

//function expression
const add2=function(a,b){
    return a+b;
}

//arrow function
//Arrow sign(=>)
const add3=(a,b)=>  a+b;

const add4=(a,b,c,d)=> a+b+c+d;

const mul=(a,b)=>a*b;

const sum=add(10,20);
console.log(sum);
const sum3=add3(10,20);
console.log(sum3);
const sum4=add4(10,20,30,40);
console.log(sum4);
const mult=mul(10,20);
console.log(mult);