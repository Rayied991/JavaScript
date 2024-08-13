//forEach ->create loop for arrays
//foreach is a method
//functions in js can be passed through parameters

function abc(){
    console.log("abc");
}

function myFunc(abc){
    return abc;
}

//A callback is a function passed as an argument to another functions


let arr=["bd","usa","uk"];
arr.forEach(function printVal(val) {//value at each index->val
    console.log(val);
})

arr.forEach((val,index,arr) =>{
    console.log(val.toUpperCase(), index,arr);
})

///foreach has 3 parameters-> value,index/position,array
// Higher order functions/methods-foreach are methods that either take another function as parameter inside them or they return another function as output.

let nums=[1,2,3,4,5,6];

let calcSquare=(num)=>{
    console.log(num ** 2);
    
};
nums.forEach(calcSquare);