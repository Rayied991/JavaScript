//form submit reloading the page

//step-1: set event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    console.log('clicked');
    //step-2:prevent default behavior(prevent reloading browser)[for form submission]
    event.preventDefault();//reload prevent
    //step-3:get the phone number
    const phoneNumber=document.getElementById('phone-number').value;
    //step-4:get the pin
    const pinNumber=document.getElementById('pin-pass').value;
    console.log(phoneNumber,pinNumber);

    //step-5:validate the phone number and pin
    //this is not the ideal way ; its temporary
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('login success');
        // step-6:redirect to dashboard 
        location.href='home.html';
    }
    else{
        alert('login failed');
    }

    
})