//int a=5
//string b='abc'
//bool c=true
//object d={a:1,b:2}
//int[] numbers=[1,2,3]
//string[] names=['a','b','c']

//dynamic type language
//primitive datatype: number,string,boolean

const a =5;
const b='abc';
const d=true;
//non-primitive datatype: array,object
const ages=[1,2,3];
const student={id:25,age:30}
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof d)
// console.log(Array.isArray(ages))
// console.log(typeof student)

let x=5;
let y=x;
console.log(x,y)
y=7;
console.log(x,y)//5,7

//reference type one changes others changes
let p={job:"engineer"}
let q=p;
console.log(p,q)
q.job="doctor"
console.log(p,q)  
p.job="teacher"
console.log(p,q)  

//no change for both
q={job:"doctor-1"}
console.log(p,q)


