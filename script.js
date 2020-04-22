function computerPlay() {
    let choice = Math.round(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(pPlayerSelection, pComputerSelection) {
    if (pPlayerSelection == "rock") {
        if (pComputerSelection == "rock") {
            console.log(`tie this round. Both chose rock`)
            return;
        } else if (pComputerSelection == "paper") {
            console.log(`player loses this round. ${pComputerSelection} beats ${pPlayerSelection}`);
            return false;
        } else if (pComputerSelection == "scissors") {
            console.log(`computer loses this round. ${pPlayerSelection} beats ${pComputerSelection}`);
            return true;
        }
    } else if (pPlayerSelection == "paper") {
        if (pComputerSelection == "paper") {
            console.log("tie this round. Both chose paper")
            return;
        } else if (pComputerSelection == "scissors") {
            console.log(`player loses this round. ${pComputerSelection} beats ${pPlayerSelection}`);
            return false;
        } else if (pComputerSelection == "rock") {
            console.log(`computer loses this round. ${pPlayerSelection} beats ${pComputerSelection}`);
            return true;
        }
    } else if (pPlayerSelection == "scissors") {
        if (pComputerSelection == "scissors") {
            console.log("tie this round. both chose scissors")
            return;
        } else if (pComputerSelection == "rock") {
            console.log(`player loses this round. ${pComputerSelection} beats ${pPlayerSelection}`);
            return false;
        } else if (pComputerSelection == "paper") {
            console.log(`computer loses this round. ${pPlayerSelection} beats ${pComputerSelection}`);
            return true;
        }
    }
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0 ; i < 5 ; i++) {
        let vPlayerSelection = prompt("what do you play?").toLowerCase();
        let vComputerSelection = computerPlay();

        let playersWins = playRound(vPlayerSelection, vComputerSelection)
        if(playersWins) {
            playerScore++;
        } else if (playersWins === false) {
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



