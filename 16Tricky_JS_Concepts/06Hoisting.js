// for(var i=0;i<5;i++){
//     console.log(i);
// }
// console.log(`Outside:${i}`);
print5();
console.log(print10);//error
print10();//error
for(let i=0;i<5;i++){
    console.log(i);
}
// console.log(`Outside:${i}`);

function print5(){
    console.log("inside print5");
}
const print10=function(){
    console.log("inside print10");
}