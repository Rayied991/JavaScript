//CallBacks->passed an argument to another function.

const hello = ()=>{
    console.log("Hello World!");
};

function sum(a,b){
    console.log(a+b);

}
function Calculator(a,b,sumCallback){
    sumCallback(a,b);

}

Calculator(1,2,sum);
Calculator(1,2,(a,b)=>{
    console.log(a+b);

});
//setTimeout also takes a callback function
setTimeout(hello, 2000);//2s->2000ms
///hello is a callback function

//nesting
let age=19;
if (age>=18){
    if(age>=60){
        console.log("Senior");
    }
    else{
        console.log("Middle");
    }
}
else{
    console.log("Child");
}

//nested loop
for (let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str=str+j;
    }
    console.log(i, str);
}



// function getData(dataId){
//     //2s
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },2000);
   
// }
function getData(dataId,getNextData){
    //2s
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
        
    },2000);
   
}


// While using callback a problem arise-> Callback hell->
// Nested CallBacks stacked below one another  forming a 
// pyramid structure(pyramid of doom).

//data1- we want first
//data2-2nd
//data3-3rd
//not together

//This is real life programming
//Complex to understand
//bad code
//This is callback hell-> nested callbacks
getData(1,()=>{
    console.log("Getting data2...");
    getData(2,()=>{
        console.log("Getting data3...");
        getData(3, ()=>{
            console.log("Getting data4...");
            getData(4);
        });
    });
});//2s

// To solve callback hell we use promises 





