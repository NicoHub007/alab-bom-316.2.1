// Create your game here!
const maxTries = 5;
function startGame(){
    let userNum = prompt("Please enter a number from 1 - 10");
    //console.log(userNum);
    const answer = Math.floor(Math.random()*10);
    //console.log(answer);
    if (userNum === answer){
        alert("You guessed it right!");
    }
    else if (userNum > answer){
        alert("Your guess is too high");
    }
    else {
        alert("Your guess is too low");
    }
}

