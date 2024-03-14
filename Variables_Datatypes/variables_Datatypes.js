//JS is a dynamically typed language
//runtime type checking
//= is assignment operator
//a=b means value of b is assigned to a 
//Reserved words cannot be used as a variable names(console,var,let..etc)
// console a=2; //error
// Console a=2; //not error
// some cases:
// Full Name; //Camel case[ we use this]
// Full_name//snake case
// full -name//kebab case
// FullName;//pascal case

let age = 24;
console.log(age);
console.log(typeof(age));
let fullname = "Tony stark";
let radius=14;
console.log(fullname); // Tony Stark
console.log(typeof(fullname)); // Tony Stark
let price = 99.99;
console.log(price);
console.log(typeof(price));

let name2="Steve";
// let name2="Steve";//error
 name2="Rogers";
console.log(name2);// Steve Rogers
//suggest to do not create variable wit same name

let x = null; //empty value 
console.log(x);
console.log(typeof(x));//object
//null -absense of an object


let y = undefined;//don't know what is inside
console.log(y);
console.log(typeof(y));
//undefined -variable has been declared but not assigned a value

let isFollow= false;
console.log(isFollow);
console.log(typeof(isFollow));//boolean

// full name="assembly" //error
// fullname@="assembly" //error

//Var,let and const(ES6)
// Var: Variable can be re-declared & updated.A global scope variable.(Before ES6)[confusion]
// Let: Variable cannot be re-declared but can be updated.A block scope variable.(ES6)[use this instead of var]
// Const: Variable cannot be re-declared or updated.A block scope available.(ES6)
const PI=3.14;
console.log(PI);
// PI=3.15;
let a;
console.log(a);//undefined


//by default no value is given but variable intializes it will show as undefined.[doesn't work with const]
// const c;//error

{
    let ab=5;
    console.log(ab);//5
}
// console.log(ab);//error(ab is not defined)

//Data types
// Primitive Datatypes-fixed(7 types)
// Number,string,Boolean,Undefined.Null,BigInt,Symbol


let d=BigInt("123");
console.log(d);
console.log(typeof(d));


let y1=Symbol("hello");
console.log(y1);
console.log(typeof(y1));
// Non-Primitives Datatypes-objects(Arrays, functions)
// objects->collection of values or properties
// objects-> stored key-value pairs  

const student = {
    FullName: "Rayied",
    Age: 20,
    cgpa: 3.8,
    isPass: true
};
console.log(student);
console.log(typeof(student)); //object [because object contains data]

//Accessing the property of an object
console.log(student.FullName);
console.log(student["Age"]);

//update age
student["Age"] = student["Age"] + 1;
console.log(student["Age"]);

//we initialize student as const and still able to update data , how?
//we are not changing the object itself, we are changing the properties of the object.changing the key of objects.


//Adding new property to an existing object 
student.city="Dhaka";
console.log(student);

//Deleting a property from an object
delete student.Age;
console.log(student);

