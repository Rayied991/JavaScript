document.getElementById('btn-delete').addEventListener('click',function(){
    const heading=document.getElementById('header');
    heading.style.display="none";
})

document.getElementById('input-field').addEventListener('keyup',function(event){
    const text=event.target.value;
    console.log(text);
    const btnDelete=document.getElementById('btn-delete');
    if(text === 'delete'){
        btnDelete.removeAttribute('disabled');
    }
    else{
        btnDelete.setAttribute('disabled',true);
    }
})