let btn=document.createElement("button");
btn.innerText="Click me!";

btn.style.backgroundColor="red";
btn.style.color="white";

let body=document.querySelector("body");
body.prepend(btn);

let para=document.querySelector("p");

para.getAttribute("class");
// para.setAttribute("class","NewClass");
console.log(para.classList);
para.classList.add("NewClass");
para.classList.remove("NewClass");