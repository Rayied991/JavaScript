
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item 2 clicked');
    //stop bubble event
    // event.stopPropagation();//stops bubbling levelWise[upper level]
    event.stopImmediatePropagation();//stops bubbling closest
        
})
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item 2 clicked2');
   
})
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item 2 clicked3');
   
})

document.getElementById('list-ul').addEventListener('click',function(){
    console.log('ul clicked');  
})
document.getElementById('list-container').addEventListener('click',function(){
    console.log('Section Container clicked');  
})
document.getElementById('body').addEventListener('click',function(){
    console.log('body of the html clicked');  
})