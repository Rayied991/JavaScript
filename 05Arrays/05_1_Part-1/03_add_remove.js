const numbers=[12,87,98,45];
const ages=[];
// console.log(numbers);
//add
numbers.push(44);
console.log(numbers);
numbers.push(47,99,102);
console.log(numbers);

//remove

const friends=["balam","kamal","sakib","Johir"];
// friends.push("Khairul");
console.log(friends);
friends.pop();
console.log(friends);
const latestOut=friends.pop();
console.log(friends);
console.log(latestOut);



//shift

const nums=[1,2,4,5,88,99,22,88,77];
console.log(nums);
let removeEle=nums.shift();
console.log(nums);
console.log("Removed element:",removeEle);

//unshift

nums.unshift(98);
console.log(nums);
nums.unshift(102,188,99);
console.log(nums);
