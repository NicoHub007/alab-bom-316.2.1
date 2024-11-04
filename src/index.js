// Create your game here!
const maxTries = 5;
function startGame() {
    const answer = Math.floor(Math.random() * 10);
    // promptUser();
    let numTries = 0;
    while (numTries < maxTries) {
       // promptUser(answer);
        let answered = promptUser(answer);
        if (!answered){
            break;
        }
        numTries++;
        console.log("User is on try " + numTries);
    }
}

function promptUser(answer) {
    let userNum = prompt("Please enter a number from 1 - 10");
    //console.log(userNum);

    //console.log(answer);
    if (userNum !== null) {
        if (userNum === answer) {
            alert("You guessed it right!");
        }
        else if (userNum > answer) {
            alert("Your guess is too high");
        }
        else if (userNum < answer) {
            alert("Your guess is too low");
        }
    }
    else {
        alert("You did not guess anything");
        return false;
    }return true;
}