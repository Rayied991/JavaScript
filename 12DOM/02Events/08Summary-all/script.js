//option-1
function makeGreen(){
    document.body.style.backgroundColor='green';
}
//option-2
document.getElementById('make-yellow').addEventListener('click',function(){
    document.body.style.backgroundColor='yellow';
})
//keyup event
document.getElementById('make-green').addEventListener('keyup',function(event){
    console.log(event.target.value);

})