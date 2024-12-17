const processOrder=(customer)=>{
    console.log(`Processing order for Customer-1`);
    var currentTime=new Date().getTime();
    while(currentTime+3000 >= new Date().getTime());
    console.log(`Order processed for Customer-1`);
};
console.log(`Take order for Customer-1`);
processOrder();
console.log(`Completed Order for Customer-1`);