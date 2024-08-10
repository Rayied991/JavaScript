let i=1;
i=i++;//1->but in next time when print it will became 2 because of 
// post-increment
let j;//undefined->still i=1
j=i++;//j=1
let k;//undefined
k=i;//here i is used after post-increment
//so k=2
//here what is the output of i,j,k? and how? 
console.log("i:",i);//2
console.log("j:",j);//1
console.log("k:",k);//2

let x = 5;
let y = x++;//5
let z = ++x;//7

console.log("x:", x); // What is the value of x?
console.log("y:", y); // What is the value of y?
console.log("z:", z); // What is the value of z?


let a = 10;//10
let b = a++ + ++a;// 10 + 12[a++ er jonno 1 barbe next time jokon a use hbe - its called post increment]
let c = ++b;//23

console.log("a:", a); // What is the value of a?->12
console.log("b:", b); // What is the value of b?->23[it incresed by 1 because here b is used-> a++ is extended]
console.log("c:", c); // What is the value of c?->23


let m = 3;//3
m = m++ + ++m + m++;//3 + 5+ 5=13

console.log("m:", m); // What is the value of m?->13


let p = 2;
let q = p++ * ++p * p++;

console.log("p:", p); // What is the value of p?
console.log("q:", q); // What is the value of q?


let u = 4;
let v = u++ + u++ + ++u + u++;//4 + 5+ 7+ 7

console.log("u:", u); // What is the value of u?
console.log("v:", v); // What is the value of v?
