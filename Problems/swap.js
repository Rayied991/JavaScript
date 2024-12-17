// way-1
let a=5;
let b=7;
let temp;
console.log(a,b);
temp=a;
a=b;
b=temp;
console.log(a,b);

// ---------------------
// way-2:destructuring 
let x=5;
let y=8;
console.log(x,y);
[x,y]=[y,x];
console.log(x,y);



