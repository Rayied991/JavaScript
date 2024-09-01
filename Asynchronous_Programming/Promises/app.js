// To solve callback hell we use promises 
//It is an object in JS


// Promise has 3 states-> pending(result=undefined),fulfilled(resolved),rejected
// let promise=new Promise((resolve,reject)=>{ //2 handlers
//     // resolve-> if i run promise done and run Successful
//     // reject-> if i run promise done and run failed/error 
//     console.log("I am a Promise");
//     //Now promise state is pending
//     // resolve("Success");//after adding this line promise state will be fulfilled
//      reject("Error");//after adding this line promise state will be rejected and show error
// });

//General Programming how promises are used->
//Example:data API
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("data",dataId);
//             // resolve("Success");
//             reject("Error");
//             if(getNextData){
//                 getNextData();
//             }
           
            
//         },5000);

//     })
   
// };


// .then ->after fulfilled
// .catch->after rejected

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a Promise");
        resolve("Success");
    })

};
const getPromise2=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a Promise");
       reject("Error");
    })

};


let promise = getPromise();
promise.then((res)=>{
    console.log("Promise Fulfilled",res);
});

let promise2 = getPromise2();
promise2.catch((err)=>{
    console.log("Promise Rejected",err);
});

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("Success");
           
//             if(getNextData){
//                 getNextData();
//             }
           
            
//         },5000);

//     })
   
// };
