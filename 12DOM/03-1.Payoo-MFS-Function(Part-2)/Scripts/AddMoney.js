/**
 * 1.Repetition occurred->
 * How to get a number from an input field
 * 1.Create a variable
 * 2.right side document.getElementById(id)
 * 3. value
 * 4. parseFloat()
 * its repeating every time same work.its not efficient.
 * 
 */
// console.log("AddMoney.js loaded");
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    // console.log("Add Money button clicked");

    // getInputFieldValueById();

    
    // const addMoney=getInputFieldValueById();
    // console.log("Add Money value:",addMoney);


    const addMoney=getInputFieldValueById('input-add-money');
    
    const pinNumber=getInputFieldValueById('input-pin-number');
   
if(isNaN(addMoney)){
    alert('Failed to add Money');
    //if didn't give return it will become NAN 
    return;//don't let it run forward
}


    if(pinNumber === 1234){
        const balance=getTextFieldValueById('balance');

       
        const newBalance=balance+addMoney;
        document.getElementById('balance').innerText=newBalance;

        //add to transaction history
        const entry=document.createElement('p');
        entry.innerText=`Added: ${addMoney} tk. New Balance: ${newBalance} tk`;
        console.log(entry);
     

        //should be a common function
        document.getElementById('transaction-container').appendChild(entry);

    }else{
        alert('Failed to add Money!Please try again');
    }

    //we will do this using a function to prevent repetition
    // const addMoney=document.getElementById('input-add-money').value;
    // const addMoneyNumber=parseFloat(addMoney);

})