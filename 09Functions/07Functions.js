// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).


//Function declaration
function sleeping(){
    console.log("I am sleeping");
}
function sleep(a,b){
    return a+b;
}
function sleepTime(name,time){//parameters
    //inside function arguments behaves as local variable
    return `${name} is sleeping from ${time}`;
}
//Function call
sleeping();
let abc=sleep(1,2);//arguments
console.log(abc);
let sTime=sleepTime("Asif","10:00PM");
console.log(sTime);