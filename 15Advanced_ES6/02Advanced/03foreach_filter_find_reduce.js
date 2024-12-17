//foreach->same as map just don't return anything
const numbers=[3,4,6,2,5,10];
// const result=numbers.forEach(n=>console.log(n));
// const result=numbers.forEach(n=>n*2);//no return
const result=numbers.forEach(n=>{
    
})
// console.log(result);



//filter->selects elements bases on  a condition and returns an array with the elements that fulfilled the condition
const players=[75,65,77,67,72,55,59];
// const filter=players.filter(player=>player>60);
// const filter=players.filter(player=>player>80);
// const filter=players.filter(player=>{
//     return player>60;
// });
const filter=players.filter(player=> player%2 ===1);

console.log(filter);

const friends=["Asif","Saad","Talha","Asif","Saad","Talha"];
const fr=friends.filter(n=>n.length>4);
console.log(fr)

//find->selects elements bases on  a condition and returns an element which comes first that fulfilled the condition.no array returned.
const selected=players.find(player=>player>70);
console.log(selected)

//reduce->reduces an array to a single value
const nums=[4,5,7,1,2,66];
const total=nums.reduce((previous,current)=>previous+current,0);//callback function(previous/accumulator,current),initial value
console.log(total);

const sum=nums.reduce((p,c)=>p+c,0);
console.log(sum);
//sum=p
//loop through=c
/**
 * map
 * foreach
 * filter
 * find
 * reduce
 */