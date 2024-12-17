//string type variables
var name = "Muhammad Ahmed";
console.log(name);

var address = "Jessore ";
console.log(address);
console.log(typeof address);


//boolean type variable
var isRich = true;//true/false is a keyword
console.log("Are you Rich?", isRich);

var passed = false;
console.log("Are you passed?", passed);
console.log(typeof passed);

//Number type variable
var price = 555;
console.log(typeof price);

//js evaluates left to right
let x=16+"volvo";//string priority higher
console.log(x);
let x1=16+4+"volvo";
console.log(x1);
let x2="16"+4+"volvo";
console.log(x2);
let x3="16"+"4"+"volvo";    
console.log(x3);
console.log(typeof x3);
console.log(typeof x2);
console.log(typeof x1);
console.log(typeof x);


//JavaScript types are dynamic

let y;//undefined
console.log(y);
y=5;
console.log(y);
y="volvo";
console.log(y);
y=true;
console.log(y);
y=null;
console.log(y);

let abc="I am 'abc'";
console.log(abc);
let abcd='I am "abcd"';
console.log(abcd);

let em="";
console.log(typeof em);//string
em=null;
console.log(typeof em);//object
// undefined->a variable that is not assigned a value.it is a keyword.
// JavaScript has 2 more datatypes->
// arrays & objects