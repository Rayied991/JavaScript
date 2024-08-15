let heading=document.querySelector("h2");
heading.innerText=heading.innerText+" from bd";

let myDiv=document.querySelectorAll(".box");
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
let idx=1;
for( i of myDiv){
        i.innerText=`New value is ${idx}`;
        idx++;
}
console.log(myDiv);
// divs[0].innerText="new value1";
// divs[1].innerText="new value2";
// divs[2].innerText="new value3";
