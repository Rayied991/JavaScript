const max=Math.max(6,23,45,1,89,23);
const numbers=[3,45,2,5,43,90,32,15];
console.log(max);
const maxArr=Math.max(...numbers);
console.log(numbers);
console.log(...numbers);//returns the numbers in an array
console.log(maxArr);

//use spread operator to copy
//non-primitive:Array,objects..etc
//variable set they take reference
//to solve this problem we can use spread operator
const nums=[4,7,5,89];
const nums2=nums;
// nums2.push(22);
// console.log(nums);
// console.log(nums);
const num3=[...nums];//copy
console.log(num3);
nums.push(99);
console.log(nums);
console.log(num3);
console.log(nums2);

//advanced
const new1=[...nums,9999];///add extra elements as copy
console.log(new1);


const abc=[1,2,3];
const abce=[4,5,6];
const abcd=[...abc];
console.log(abc);
console.log(abcd);
const merge=[...abc,...abce];
console.log(merge);

//passing as arguments
let num=[1,23,45];
Math.max(...num);
Math.min(...num);

