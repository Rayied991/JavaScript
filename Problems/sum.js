function twoSum(nums, target) {
    let len=nums.length;
    let item2;
    let item1;
    let sum=0;
    for(let i=0;i<len;i++){
        item1=nums[i];
        for(let j=i+1;j<len;j++){
            item2=nums[j];
            sum=item1+item2;
            if(sum===target){
                return [i,j];
            }
        }
        
    }
    
}

nums=[3,2,3]
target=6

console.log(twoSum(nums,target))