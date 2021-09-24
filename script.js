const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

game();


// This functions picks one of the Arrays' choices
function pickSomething(number) {
    return choices[number];
}


// This fnctions creates a random number for the computer choice and uses "pickSomething()" to select a choice and then returns it
function computerPlay() { 
    let random = Math.floor(Math.random() * choices.length); // Generates a random number from 0 to choices.length-1 (because the last digit is not included in Math.random)
    return pickSomething(random); // Returns one of the choices defined in choices :D
}
// Prompts the player to pick 1, 2 or 3 to choose something
function makeDecision() {
    let pick = prompt("Choose\n1. Rock\n2. Paper\n3. Scissors")-1;
    if(pick === -1) {
        return computerPlay();
    }
    return pickSomething(pick);
}
// This function checks who has won
function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {

        // Player picks Rock
        if (computerSelection === 'rock') {
            return 'draw';
        } else if (computerSelection === 'paper') {
            return 'computer';
        } else if (computerSelection === 'scissors') {
            return 'player';
        } else {
            return 'Something went wrong with the computerSelection!';
        }

        // Player picks Paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'player';
        } else if (computerSelection === 'paper') {
            return 'draw';
        } else if (computerSelection === 'scissors') {
            return 'computer';
        } else {
            return 'Something went wrong with the computerSelection!';
        }

        // Player picks Scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'computer';
        } else if (computerSelection === 'paper') {
            return 'player';
        } else if (computerSelection === 'scissors') {
            return 'draw'
        } else {
            return 'Something went wrong with the computerSelection!';
        }
    } else {
        return "Something went wrong with the playerSelection!";
    }
    return 'Somethign went wrong!';
}

function game() {
    

    for(let round = 1; round <= 5; round++) {
        updateScore(playRound(makeDecision(), computerPlay()));
        console.log('Current Score: ' + playerScore +" : " + computerScore);
    }

    if(playerScore > computerScore) {
        console.log('YOU WON!');
    } else if (playerScore < computerScore) {
        console.log('YOU LOSE');
    } else if (playerScore === computerScore) {
        console.log('DRAW!');
    } else {
        console.log('Something went wrong!');
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        return;
    }
}