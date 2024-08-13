//Arrow function
function sum(a,b){
    return a+b;

}

const arrowSum = (a,b) =>{
    return a+b;
};

const printHello= () =>{
    return "Hello";
    // console.log("hello");
};

function mul(a,b){
    return a*b;
}

const arrowMul=(a,b) =>{
    return a * b;
};

//these are older way
//now lets see arrow functions
console.log(arrowSum);
let a= arrowSum(3,4);
console.log(a);
console.log(arrowMul);
console.log(arrowMul(3,4));
console.log(printHello());


