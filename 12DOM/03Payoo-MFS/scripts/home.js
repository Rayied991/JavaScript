// console.log("Home js");

//step-1: set event handler
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    //step-2:get the amount
    const amount=document.getElementById('amount').value;
    //step-3:get the pin
    const Pin=document.getElementById('pass').value;
    //step-4:validate pin
    // let update=parseInt(oldBalance);
    // console.log(update);
    // console.log(typeof update);
    
    if(Pin === '1234'){
        //step-5:fetch current money
        
        const Balance=document.getElementById('balance').innerText;

    //    step-6:add new amount and update it 
    const addMoney=parseFloat(amount);
    const CurrBalance=parseFloat(Balance);
    const newUpdatedBalance=CurrBalance+addMoney;
    console.log(typeof newUpdatedBalance);

    //set new balance
    document.getElementById('balance').innerText=newUpdatedBalance;
    
    }
    else{
        alert('invalid pin');
    }
    //step-7:display the new balance
    

});