///Comparison
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("Success");                            
            
        },2000);

    })
   
};


// Callback hell
// console.log("Callback hell");
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

//Promise chain
// console.log("Promise chain");
// getData(1).then((res)=>{
//     console.log("Getting data2...");
//     return getData(2);
// }).then((res)=>{
//     console.log("Getting data3...");
//     return getData(3);
// }).then((res)=>{
//     console.log("Getting data4...");
//     console.log(res);
// });

//Async Await
console.log("Async Await");
async function getAllData(){
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
    console.log("Getting data5...");
    await getData(5);
  
}