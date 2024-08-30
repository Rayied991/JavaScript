let userScore=0;
let compScore=0;



const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");

const GenCompChoice = ()=>{
    const options=["rock","paper","scissors"];
    // rock,paper,choice
   const resIdx= Math.floor(Math.random(options) * 3);
    return options[resIdx];
};

const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw. Play again!";
    msg.style.backgroundColor="#081b31";
};

// const compWon=()=>{
//     console.log("Computer Won");
// };

// const UserWon=()=>{
//     console.log("User Won");
// };

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user.innerText=userScore;
        console.log("You win");
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
       
        
    }
    else{
        compScore++;
        comp.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }

};
const playGame=(userChoice)=>{
    console.log("User choice = ",userChoice);
    //Generate computer choice
    const compChoice=GenCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw
        drawGame();
    }
    //one way
    // else if(userChoice === "rock" && compChoice === "paper" || userChoice === "scissor"  && compChoice === "paper" || userChoice === "rock"  && compChoice === "scissor" ){
    //     UserWon();

    // }
    // else{
    //     compWon();
    // }
    // way-2
    else{
        let userWin=true;
        if(userChoice === "rock" ){
            //paper/scissor
            userWin =compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            // scissor, rock 
            userWin= compChoice === "scissors"? false:true;
        }
        else{
            //rock,paper
            userWin=compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>
{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    })
});
