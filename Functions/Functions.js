//Functions
//define function
function myFunction(){
    console.log("Welcome to world of JS");
    console.log("We are learning js");
    
}

function myFunction2(msg){
    //Parameter->input variable
    console.log(msg);
}
function myFunction3(msg,num){
    
    console.log(msg * num);
}

// functions saves from code redundancy->repetition 
//function call/invoke
myFunction();
myFunction2("I love JS"); //Argument
//variable used in function definition-parameter
//value passed in function call-parameter
myFunction3("JS",100);

//function->2 numbers sum
// function parameters->like local variable of a function->block scope
function twoSum(num1,num2){
    //num1 & num2 will act as local variable -> scope
     s= num1+num2;
     console.log("Before return");
     console.log(x);
    return s;
    console.log("After return");//never executed
}
let val = twoSum(3,4);
console.log(x);
console.log(val);
