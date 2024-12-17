console.log(1)
console.log(2)
// console.log(3)
// setTimeout(()=>{
//     console.log(3)
// })
// setTimeout(()=>{
//     console.log(3)
// },2000)
//setTimeout executes 1 time

console.log(4)
console.log(5)
console.log(6)
let num=0;
const clockId=setInterval(()=>{
    num++;
    console.log(clockId,num)
    // console.log("I am you")
    if(num>5){
        clearInterval(clockId);//because of it the timeout will stop
    }
},2000)
//it doesn't stop normally as default
