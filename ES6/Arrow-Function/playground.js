const searchInput=document.querySelector('.search');
const display=document.querySelector('.result');
const thanks=document.querySelector('.thanks');

//normal function 
// function show(){
//     display.innerHTML=this.value;
//     setTimeout(function(){
//         thanks.innerHTML=`You have typed: ${this.value}`;
//     },1000);
// }
//Arrow function



searchInput.addEventListener('keyup',()=>{
    // console.log(this);
    display.innerHTML=this.value;
});