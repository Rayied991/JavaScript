//Datatypes
// Primitive Datatypes->7 types-> 
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol

// Non-Primitive Datatypes->Objects->Sub category->Arrays,Functions
// Objects-> It is a collection of values
// Generally objects stored key:value pair 


//Primitive Datatypes
let age=24;
console.log(typeof(age)); //Number

let Price=100.5;
console.log(typeof(Price));//Number

let fullName="Tony Stark";
console.log(typeof(fullName)); //String

let isFollow=true;
console.log(typeof(isFollow));//boolean

let x;
console.log(typeof(x)); //undefined

let y=null;
console.log(y);
console.log(typeof(y)); //object

let bI=BigInt(123);
console.log(bI);//123n(n determines bigInt)
console.log(typeof(bI));//BigInt(Rarely used)

let sym=Symbol("Hello!");
console.log(typeof(sym));//Symbol(Rarely used)

// Non-Primitive Datatypes 
const  student  = {
    fName: "Rahul",
    Age: 20,
    cgpa: 3.6,
    isPass: true
};
console.log(student);
console.log(typeof(student));

//Access key -2 ways
//way-1
console.log(student["fName"]);
console.log(student.fName);

//assigning new value inside objects
student["Age"] = student["Age"] + 1;
// student["Age"] = 90;//or this way also
console.log(student.Age);

student["name"] = "Rahul Ahmed";
console.log(student.name);

/*The object is defined as const how are we able to change
the values of object as const?
-> You cannot change on constant variable. But you can change 
on constant objects keys.
To change an object we need to change full object keys.
*/

//Last thing
console.log(1 + 2);
console.log(2 - 1);

console.log("123" + 1);//1231
let p="123" + 2;
console.log(typeof(p));

