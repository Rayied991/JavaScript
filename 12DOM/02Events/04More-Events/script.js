document.getElementById('btn-more').addEventListener('click',function(){
    console.log('clicked');
})

document.getElementById('mouse-enter').addEventListener('mouseenter',function(){
    console.log('mouse enter');
})

document.getElementById('mouse-move').addEventListener('mousemove',function(){
    console.log('mouse move');
})
document.getElementById('text-field').addEventListener('focus',function(){
    console.log("Event triggered inside the input field");
})
document.getElementById('text-field').addEventListener('blur',function(){
    console.log("Event triggered inside the input field blur");
})
document.getElementById('text-field2').addEventListener('keydown',function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log(event.target);
    console.log(event.target.value);
    
})
document.getElementById('text-field3').addEventListener('keypress',function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log(event.target);
    console.log(event.target.value);
    
})
document.getElementById('text-field4').addEventListener('keyup',function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log(event.target);
    console.log(event.target.value);
    
})