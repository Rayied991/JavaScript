//reverse array[with reverse method]
const nums=[1,2,3,4,5];

console.log(nums);
const reversed=nums.reverse();
console.log(reversed);

const nums1=[1,2,3,4,5];
//without reverse method
const rev_numbers=[];
for(const num of nums1){
    console.log(num);
    rev_numbers.unshift(num);   

}
console.log(rev_numbers);
console.log(nums1);
let rev=[];
for(let i=nums1.length-1;i>=0;i--){
    
    rev.push(nums1[i]);


}
console.log(rev);

