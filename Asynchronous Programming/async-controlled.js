const takeOrder=(customer,callback)=>{
    console.log(`Take order for ${customer}`);
    callback(customer);
}

const processOrder=(customer,callback)=>{
    console.log(`Processing order for ${customer}`);
    setTimeout(()=>{
        console.log(`Cooking Completed`);
        console.log(`Order processed for ${customer}`);
        callback(customer);
    },3000);
    
};


const completeOrder=(customer)=>{
    console.log(`Completed Order for ${customer}`);
}
takeOrder('Customer-1',(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer);

    });

});

console.log(`Hello`);


//Problem of using callbacks->
//its called callback hell(not readable)
/**
 * takeOrder('Customer-1',(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer,(customer)=>{
            completeOrder1(customer,(customer)=>{
            completeOrder2(customer,(customer)=>{
            completeOrder3(customer,(customer)=>{
                completeOrder4(customer);
            
            });
            });
            });
            });

    });

});
 */