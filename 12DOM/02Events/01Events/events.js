//Option-1: directly set on the html element
/* <button onclick="console.log(70)">Click me2!</button>  */

//option-2: add onclick function on the html element
//We will use this
/* <button onclick="makeRed()"> Make red!</button>  */
function makeRed(){
    document.body.style.backgroundColor='red';
}

//option-3: 

const makeBlueButton=document.getElementById("make-blue");
//set onclick
makeBlueButton.onclick =  makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}

const makePurpleButton=document.getElementById("make-purple");
makePurpleButton.onclick=makePurple;
function makePurple(){
    document.body.style.backgroundColor='purple';
}


//option-4:
//Important:we will use this sometime
const pinkButton=document.getElementById("make-pink");
pinkButton.addEventListener('click',makePink);

function makePink(){
    document.body.style.backgroundColor='pink';
}
//option-4:another
const makeGreenButton=document.getElementById("make-green");
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
});

// option-4:final 
// document.getElementById('make-goldenrod').addEventListener('click',function (){
document.getElementById('make-goldenrod').addEventListener('click',function (){
    document.body.style.backgroundColor='goldenrod';
})
