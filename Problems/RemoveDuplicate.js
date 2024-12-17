function RemoveDuplicate(arr){
   const unique=[];
    for(const item of arr){
        if(unique.includes(item) === false){
            unique.push(item);
        }
   }
   return unique;
}
let arr=[1,2,3,4,5,6,7,2,1,4,5,5,6,7,1,1];
let names=["abul","babul","abul","babul","sumon","babul"];

const uniquearr=RemoveDuplicate(arr);
console.log(uniquearr);
const u2=RemoveDuplicate(names);
console.log(u2);