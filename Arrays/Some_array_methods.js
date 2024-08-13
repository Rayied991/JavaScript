//Map->
//Creates a new array with the prevs of some operations.
//The value its  callback returns are used to form a new array.


//Map is simillar to foreach
//difference:
// Map returns a new Array
// foreach no new array returned


let nums=[67,52,39];
//print values
// nums.map((val)=>{
//     console.log(val);
// })
let newArr=nums.map((val)=>{
    return val ** 2;
})
console.log(newArr);
console.log(nums);

//filter method
//Creates a new array of elements that give true for a condition/filter.
let nums1=[1,2,3,4,5,6,7,8,9,10];
let evenNums=nums1.filter((val)=>{
    return val%2 ==0;
})
let oddNums=nums1.filter((val)=>{
    return val%2 !=0;
})
console.log(evenNums);
console.log(oddNums);

//Reduce method->
//Performs operations & reduces the array to a single value.
//It returns that single value.
const array1=[1,2,3,4];
const init=0;
const sumWithinit=array1.reduce(
    (prev,current)=> {
        return prev+current;
    }
);
console.log(sumWithinit);

let arr2=[5,6,7,2,9,1];
const large=arr2.reduce((prev,curr)=>{
    return prev>curr ? prev: curr;
})
console.log(large);