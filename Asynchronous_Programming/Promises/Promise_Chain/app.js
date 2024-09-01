//Asynchronous function-> because timeout is used
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data1");
            resolve("Success");
        }, 4000);
    });
};
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data2");
            resolve("Success");
        }, 4000);
    });
};

// console.log("Fetching data1");
// let p1= asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data2");
//     let p2= asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

// simpler version 
console.log("Fetching data1");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("Fetching data2");
    asyncFunc2().then((res)=>{
        console.log(res);
    });
});


//Another example of promise chain
console.log("Fetching data1 older");
function getData(dataId){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("fetched old data",dataId);
                resolve("Success");
               
                
            },5000);
    
        })
       
    };


//callback hell
// getData(1,()=>{
//     console.log("Getting data2...");
//     getData(2,()=>{
//         console.log("Getting data3...");
//         getData(3, ()=>{
//             console.log("Getting data4...");
//             getData(4);
//         });
//     });
// });//2s

// do this using Promise chaining 

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//         getData(3).then((res)=>{
//             console.log(res);
//             getData(4);
//         });
//     })
// });
// Simpler way of chaining
getData(1).then((res)=>{
    console.log("Getting data2...");
    return getData(2);
}).then((res)=>{
    console.log("Getting data3...");
    return getData(3);
}).then((res)=>{
    console.log("Getting data4...");
    console.log(res);
});


