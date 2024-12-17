document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const outAmount=document.getElementById('amount-out').value;
    const outPin=document.getElementById('pass-cash-out').value;
    const currBalance=document.getElementById('balance').innerText;

    if(outPin === '1234' ){
        const newBalanceAdd=parseFloat(outAmount);
        const oldBal=parseFloat(currBalance);
        const newBalance=oldBal-newBalanceAdd;
        console.log(newBalance);
        document.getElementById('balance').innerText=newBalance;
    }
    else{
       alert('Failed to Cash Out!Please try again');
    }
})