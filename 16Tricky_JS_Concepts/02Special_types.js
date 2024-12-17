//Special types:null,undefined
/**
 * 8 ways to get undefined.
 * 1.variable that is not initialized will give undefined.
 * 2.function with no return
 * 3.parameter that is not passed will give undefined
 * 4.if return has nothing on the right side return undefined
 * 5.property that doesn't exist on an object will give undefined
 * 6.in an array index that doesn't exist will give undefined
 * 7.  deleting an element inside an array will give undefined
 * 8. set value directly to undefined
 */

//1
let first;
// console.log(first)//undefined

//2
function second(a,b){
   const total=a+b;
}
const res=second(1,2);
// console.log(res)//undefined

//3
function third(a,b,c,d){
   const total=a+b+c+d;
   console.log(a,b,c,d);
}
// third(1,2);
// const res1=third(1,2);
// console.log(res1)//undefined
//4

function noNegative(a,b){
    if(a<0 ||b<0){
        return
    }
    return a+b;
}

const res2=noNegative(-1,2);
// console.log(res2)//undefined
//5
const fifth={id:2,name:"abc",age:50}
// console.log(fifth.age,fifth.salary);//undefined
//6
const sixth=[1,2,3];
// console.log(sixth[4]);//undefined
//7
const seventh=[1,2,3];
delete seventh[1];//you should not use it instead use splice
// console.log(seventh[1]);//undefined
//8
const eight=undefined;
// console.log(eight);//undefined

const ninth=null;
const data={results:[],updated:null}
// console.log(typeof undefined);//undefined
// console.log(typeof null);//object