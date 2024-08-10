
for(i=0;i<=100;i++){
    if(i%2 === 0){
        console.log(i," is even");
    }
    else{
        console.log(i," is odd");
    }
}

/*
Create a game where you start with any random game number . Ask the user 
to keep guessing the number until the user enters correct value. 
*/

let gameNumber=25;
let guess=prompt("Guess the number:");
console.log("Number is :",guess);
while(guess != gameNumber){
    guess=prompt("You entered wrong! Guess again:");

}
console.log("Congratulations! You guessed right number");
