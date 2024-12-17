/**
 * Destructuring is a technique for unpacking objects,arrays and assigning them to variables.
 * helps to deal with lot of parameters,default values
 * saves to writing repetitive code
 */
const actor={
    name: "Tom Cruise",
    age:60,
    phone:"0123456789",
    money:100000,
};

// const phone=actor.phone;
// const name=actor.name;
// const age=actor.age;
//destructuring
const{phone,name,age,money:cash}=actor;
// money:cash //change variable name ->alias
//if right side is an object then left side of destructuring will be object as well
//use property name as variable that contains the property value

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(name);
console.log(name);
console.log(name);
console.log(age);
console.log(age);
console.log(age);
console.log(age);
// console.log(money);//error 
console.log(cash);


//array destructuring
const numbers=[45,99];
const [first,second]=numbers;
const [x,y]=[12,66];



function doubleThem(a,b){
    return [a*2,b*2];
}

const [f,l]=doubleThem(6,9);
console.log(f,l);
console.log(first,second);
console.log(x,y);

//swap without using third variable
let a=12;
let b=45;
[a,b]=[b,a];

console.log(a,b);