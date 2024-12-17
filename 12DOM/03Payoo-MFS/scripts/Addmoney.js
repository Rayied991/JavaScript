
document.getElementById('btn-add-money').addEventListener('click',function(event){

    event.preventDefault();
    //fetch pin Number and add money
    const pinNumber=document.getElementById('pass').value;
    const addMoney=document.getElementById('amount').value;
    const currBalance=document.getElementById('balance').innerText;

    if(pinNumber === '1234'){
        const newBalanceAdd=parseFloat(addMoney);
        const oldBal=parseFloat(currBalance);
        const newBalance=newBalanceAdd+oldBal;
        console.log(newBalance);
        document.getElementById('balance').innerText=newBalance;
    }
    else{
       alert('Failed to add Money!Please try again');
    }



})