document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    
    //step-1:show cash out form
   

    document.getElementById('cash-out-form').classList.remove('hidden');

     //step-2:hide add money form
     document.getElementById('add-money-form').classList.add('hidden');
});
document.getElementById('btn-show-add-money').addEventListener('click',function(){
    
    //step-1:hide cash out form
   
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');

    
});

