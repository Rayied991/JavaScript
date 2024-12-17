console.log(1);
console.log(2);
// doSomething();
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res=>res.json())
//     .then(data=>console.log(data))

setTimeout(()=>{
    console.log("Lazy logged"); 
},4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}