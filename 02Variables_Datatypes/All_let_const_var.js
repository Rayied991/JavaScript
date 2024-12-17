// var x=7;
// if(true){
//     var x=6;
//     console.log(x);
// }

// console.log(x);//x=6
// let x=7;
// if(true){
//     let x=6;
//     console.log(x);
// }

// console.log(x);//x=7


//RedeClearing var
// var x = 10;
// // Here x is 10

// {
// var x = 2;
// // Here x is 2
// }
// console.log(x);

//to solve this problem comes->let
//RedeClearing let
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}
console.log(x);

// Here x is 10


// var y = 2;   // Allowed
// let y = 3;   // Not allowed

// {
// let y = 2;   // Allowed
// let y = 3;   // Not allowed
// }

// {
// let y = 2;   // Allowed
// var y = 3;   // Not allowed
// }
const a=5;
// const b;//error 
// const a=7;//error
// a=6;//error
console.log(a);
// console.log(b);

//we can change const array values
//we can not change reassign
const c=[1,2,3];
const d=5;
c[0]=d;
// c.push(55);
const x1="Bangladesh";
c.push(x1);

console.log(c);


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.log(car);