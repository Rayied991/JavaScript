const processOrder=(customer)=>{
    console.log(`Processing order for Customer-1`);
    setTimeout(()=>{
        console.log(`Cooking Completed`);
    },3000);
    console.log(`Order processed for Customer-1`);
};
console.log(`Take order for Customer-1`);
processOrder();
console.log(`Completed Order for Customer-1`);