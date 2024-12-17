document.getElementById('show-add-money-form').addEventListener('click',function(){
    console.log('Show add money button clicked');
    showSectionById('add-money-section');

});
document.getElementById('show-cash-out-form').addEventListener('click',function(){
    console.log('Show Cash Out button clicked');
    showSectionById('cashOut-section');

});
document.getElementById('show-transactions-form').addEventListener('click',function(){
    console.log('Show transactions button clicked');
    showSectionById('transaction-section');

});