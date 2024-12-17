var orangePrice = 20;

var chocolate= 0.5;

// convert string to number 
var applePrice= parseInt("26");
var applePrice2= parseFloat("26.9");//double point
var abc=parseInt("abcdssfdsfsdssadadsfwtdasd");

console.log(typeof orangePrice);
console.log(typeof chocolate);
console.log(typeof applePrice);
console.log(typeof applePrice2);
console.log( applePrice2);
console.log( parseInt("26.9"));
console.log(typeof abc);
console.log(orangePrice+applePrice);
console.log(orangePrice+abc);//NAN
console.log(typeof(orangePrice+abc));//NAN=number
console.log(typeof (orangePrice+applePrice));

//20+26=46 but its not coming right 2026 (WITHOUT PARSEINT)

var first=0.1;
var second=0.2;
var total=first+second;
console.log(total);//0.300000000000004
console.log(total.toFixed(2));//0.3//to fixed convert it to string
let vart2=total.toFixed(2);
console.log(typeof vart2);

const num1=50/0;
console.log(num1);//infinity

const num2=-50/0;
console.log(num2);//-infinity

const x='10';
let num=Number(x);
console.log(num);//10
console.log(typeof num);//number


var a =isNaN('10');
var a1 =isNaN(9);

console.log(a);//false
console.log(a1);//false

var a3= isNaN(4- 'hello');

console.log(a3);//true
