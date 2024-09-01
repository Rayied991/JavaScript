//Async-await
//async-> it automatically returns promise
// async function hello(){
//     console.log("Hello");
// }

//await-> pauses the execution of its surrounding async function until the promise is settled.
//we can use await inside a async function only.


function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
        resolve(200);
        },2000);
});
}

async function getWeatherData(){
    await api();//1st call
    await api();//2nd call
}

function getData(dataId){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("data",dataId);
                resolve("Success");                            
                
            },2000);
    
        })
       
    };
    
//Async-Await

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

//easier to read