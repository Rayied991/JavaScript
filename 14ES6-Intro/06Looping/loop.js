const numbers=[1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }
for(const num of numbers){
    console.log(num);
}

//string
const personName="sakib";
for(const char of personName){  
    console.log(char);
}

//for-of:can be applied in array,string not for object
//for-in :applied on objects

const glass={
    name:"glass",
    color:"golden",
    price:12,
    isCleaned:true,
};
// for(const key of glass){
//     console.log(key);
// }

//sol-1
for(const key in glass){
    const value=glass[key];
    console.log(key," : ",value);
}
console.log("sol-2");
//sol-2(using for of)
const keys=Object.keys(glass);
for(const key of keys){
    console.log(key," : ",glass[key]);
}