function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function roundResult(pPlayerSelection, pComputerSelection, playerWon, tie=true,) {
    if (tie) {
        console.log(`round was a tie. both chose ${pPlayerSelection}`);
    } else if (playerWon){
        console.log(`player won the round. they played ${pPlayerSelection}, computer played ${pComputerSelection}`);
    } else {
        console.log(`player lost the round. they played ${pPlayerSelection}, computer played ${pComputerSelection}`);
    }
}

function playRound(pPlayerSelection, pComputerSelection) {
    if (pPlayerSelection == "rock") {
        return pComputerSelection == "scissors" ? true : false;
    } else if (pPlayerSelection == "paper") {
        return pComputerSelection == "rock" ?  true : false;
    } else if (pPlayerSelection == "scissors") {
        return pComputerSelection == "paper" ? true : false;
    }

    return "tie";
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0 ; i < 5 ; i++) {
        let vPlayerSelection = prompt("what do you play?").toLowerCase();
        let vComputerSelection = computerPlay();

        let playersWins = playRound(vPlayerSelection, vComputerSelection)
        if(playersWins == "tie") {
            roundResult(vPlayerSelection, vComputerSelection);
        } else if (playersWins) {
            roundResult(vPlayerSelection, vComputerSelection, true, false);
            playerScore++;
        } else {
            roundResult(vPlayerSelection, vComputerSelection, false, false);
            computerScore++;
        }
        console.log(`you have ${playerScore} points. Computer has ${computerScore} points`);
    }
    if (playerScore > computerScore) {
        console.log("player wins");
    } else if (playerScore == computerScore) {
        console.log("it's a tie");
    } else {
        console.log("computer wins");
    }
}

game();



