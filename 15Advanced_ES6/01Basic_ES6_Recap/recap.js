/**
 * var,let,const:let-const(block scope)
 *  default parameter
 * template string
 * Arrow functions
 * Destructuring
 * Spread Operator
 * keys,values[not es6]
 * object.entries
 * for of, for in
 */

const a=56;
const numbers=[1,2,3,4,5];
const person={
    name:'sachin',
    age:23
}

const message=`Hi, ${person.name} has a ${a} access to ${numbers[2]} `;
console.log(message);

const square= x=> x*x;
const sum=(a,b)=>{
    return a+b;
}
console.log(square(5));
console.log(sum(5,5));

const {age,z,...others}={x:2,y:5,z:33,name:'sachin',age:55};

const [first,second,...remaining]= ['sam','samiul','sachin','rem'];