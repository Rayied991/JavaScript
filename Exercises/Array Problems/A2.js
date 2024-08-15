let init = 0;
let num = [1, 2, 3, 4];

function runningSum(nums) {  // Ensure function name matches the one you're calling
    let sum = init;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];    // Add the current element to the sum
        result.push(sum);  // Push the cumulative sum to the result array
    }
    
    return result;  // Return the result array containing the cumulative sums
}

let ret = runningSum(num);  // Call the correctly named function
console.log(ret);  // Output the result
