function handleOnclick(){
    const handlerStatus=document.getElementById("handler-status");
    handlerStatus.innerText="Handled by function attached to onclick attribute";

}

// Option-2 
document.getElementById("event-listener").addEventListener('click',function(){
    const handlerStatus=document.getElementById("handler-status");
    handlerStatus.innerText="text Updated by add event listener button";
})

// option-2:recap 
document.getElementById("btn-update").addEventListener('click',function(){
    const inputField=document.getElementById("input-field");
    // console.log(inputField.innerText); //cannot fetch by using innerText
    const inputText=inputField.value;
    const para=document.getElementById("input-textDisplay");
    para.innerText=inputText;
    inputField.value='';
})

