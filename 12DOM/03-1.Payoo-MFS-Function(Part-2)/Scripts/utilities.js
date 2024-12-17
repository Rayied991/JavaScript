/**
 * Shared Functions
 */
// console.log("Utilities loaded");
// function getInputFieldValueById(){
//     console.log("getInputFieldValueById");
//     const addMoney=document.getElementById('input-add-money').value;
//     return addMoney;

// }

function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
   
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    //hide all sections
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cashOut-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    //show the section with provided id
    document.getElementById(id).classList.remove('hidden');

}