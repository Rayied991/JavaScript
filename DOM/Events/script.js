/*
The change in the state of an object is known as an event.
Events are fired to notify code of "interesting changes"
that may affect code execution.->Event Handling
*/
let btn1=document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn1 was clicked!");
    let a=25;
    a++;
    console.log(a);
};
btn1.onclick = () =>{//will be override
    console.log("Handler2!");
    
};
let btn2=document.querySelector("#btn2");

btn2.ondblclick = () =>{
    console.log('Button was clicked 2 times');
};

let box=document.querySelector("div");

box.onmouseover = () =>{
    console.log("You are inside div");
};

//Event object
//it  is a special object that has details about the event.
//All event handlers have access to the Event Object's properties & methods.
let btn11= document.querySelector("#btn11");
btn11.onclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
    
};

//event listeners
// better approach to handle events
//in same event multiple work can be done/occurred.
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",(e) =>{
    console.log("Button 3 was clicked!-Handler1");
    // console.log(e);
    // console.log(e.type);
});
btn3.addEventListener("click",() =>{
    console.log("Button 3 was clicked! -Handler2");
});
btn3.addEventListener("click",() =>{
    console.log("Button 3 was clicked! -Handler3");
});
// btn3.addEventListener("click",() =>{
//     console.log("Button 3 was clicked! -Handler4");
// });
const handler4=()=>{
    console.log("Button 3 was clicked! -Handler4");
}
btn3.addEventListener("click",handler4);
//remove eventListener
btn3.removeEventListener("click",handler4);