// Variable keywords:
// 	Var: Variable can be re-declared & updated. A global Scope Variable.
// 	Let: Variable cannot be re-declared but can be updated. A block scope({}) variable.
// 	Const: Variable cannot be re-declared or updated. A block scope({}) variable.
//JS is a dynamically typed language
//runtime type checking
//= is assignment operator
//a=b means value of b is assigned to a 
//Reserved words cannot be used as a variable names(console,var,let..etc)
// console a=2; //error
// Console a=2; //not error
// some cases:
// Full Name; //Camel case[we use this]
// Full_name//snake case
// full -name//kebab case
// FullName;//pascal case

var age=24;
var age =15;
var age = 86;
console.log(age);
// Variable can be updated and re-declared in var. [problem]
// So we should use let keyword 
// Variable cannot be re-declared but can be updated in let keyword.
let Age=24;
// below lines cause errors because in let you cannot re-declare variables. 
// let Age =15;
// let Age = 86;
// but we can update variable data 
Age =59;
Age=88;

console.log(Age);

//Another way of using let keyword
let a; //defined no value given
console.log(a);//By default it will show undefined value
a=10;
console.log(a);

//But this way doesn't work on const

// const c;//error
// console.log(c);//initialization missing
// //in const always must initialize

const Price=100;
// Price=200;//error
// Price=1000;//error
console.log(Price);

const PI=3.1416;
console.log(PI);
//Variable cannot be re-declared or updated in const keyword



let fullName= "Tony Stark";
// let age = 24;
let totalPrice=1000;
console.log(fullName);

console.log(totalPrice);

//Block(basic)

{
    let b=5;
    // let b=10;//cannot be redefined
    console.log(b);
}
//if i want to re-define->
{
    let b=10;
    console.log(b);

}
