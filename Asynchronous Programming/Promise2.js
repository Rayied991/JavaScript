const promise1=Promise.resolve('Promise-1 resolved');

const promise2=new  Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise-2 resolved');
    },3000);
});
const promise3=new  Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise-3 resolved');
    },5000);
});

// promise1.then((res)=> console.log(res));

// promise2.then((res)=> console.log(res));

//run multiple promise concerently and fetch result at a time
Promise.all([promise1,promise2]).then((res)=>{
    console.log(res);
});

//Promise.race-> which one resolved first return that promise
// Promise.race([promise3,promise2]).then((res)=>{
//     console.log("Race",res);
// });

//promise is also not programming-friendly
