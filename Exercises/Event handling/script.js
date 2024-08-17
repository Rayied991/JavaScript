let toggle=document.querySelector("#toggle");
let currmode="light";
let body=document.querySelector("body");
toggle.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode="dark";
        // body.style.backgroundColor="black";//way-1
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode="light";
        // body.style.backgroundColor="white";//way-2
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
    
});