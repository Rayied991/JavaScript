document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();

    const cashOutAmount= getInputFieldValueById('input-cash-out');
    // console.log(cashOutAmount);
    const pinNumberCashOut=getInputFieldValueById('input-cash-out-pin');
    // console.log(pinNumberCashOut);

    if(isNaN(cashOutAmount)){
        alert('Failed to Cash Out');
        //if didn't give return it will become NAN 
        return;//don't let it run forward
    }
    if(pinNumberCashOut === 1234){
        const accBalance=getTextFieldValueById('balance');

        if(cashOutAmount >  accBalance){
            alert("Insufficient Balance");
            return;
        }

        const updatedNewBalance=accBalance - cashOutAmount;
        document.getElementById('balance').innerText=updatedNewBalance;


        //add to transaction history
        const entryCashOut=document.createElement('div');
        entryCashOut.classList.add('bg-yellow-300');
        entryCashOut.innerHTML=`<h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOutAmount} Withdrawn. New Balance: ${updatedNewBalance}</p>`;
       
        document.getElementById('transaction-container').appendChild(entryCashOut);
        console.log(entryCashOut);
    }
    else{
        alert('Failed to Cash Out!Please try again');
    }
})