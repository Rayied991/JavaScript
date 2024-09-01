function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("Success");                            
            
        },2000);

    })
   
};

//Async-Await
///need to be called the function to get executed

// async function getAllData(){
// console.log("Getting data1...");
// await getData(1);
// console.log("Getting data2...");
// await getData(2);
// console.log("Getting data3...");
// await getData(3);
// console.log("Getting data4...");
// await getData(4);
// console.log("Getting data5...");
// await getData(5);

// }


//to solve unnecessary call->
//IIFE- Immediately Invoked function Expression
//it is  a function that is called immediately as soon as it is defined.

// IIFE    -it can be used only once

(async function (){
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    
    
    })();
