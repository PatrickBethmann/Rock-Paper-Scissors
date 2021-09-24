const choices = ['rock', 'paper', 'scissors'];


console.log(playRound(makeDecision(), computerPlay()));


// This functions picks one of the Arrays' choices
function pickSomething(number) {
    return choices[number];
}

function computerPlay() { 
    let random = Math.floor(Math.random() * choices.length); // Generates a random number from 0 to choices.length-1 (because the last digit is not included in Math.random)
    return pickSomething(random); // Returns one of the choices defined in choices :D
}

function playRound(playerSelection, computerSelection) {
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    if(playerSelection === 'rock') {

        // Player picks Rock
        if (computerSelection === 'rock') {
            return 'Draw! Both picked Rock';
        } else if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissors';
        } else {
            return '1 Something went wrong with the computerSelection!';
        }

        // Player picks Paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSelection === 'paper') {
            return 'Draw! Both picked Paper';
        } else if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else {
            return '2 Something went wrong with the computerSelection!';
        }

        // Player picks Scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'scissors') {
            return 'Draw! Both picked Scissors'
        } else {
            return '3 Something went wrong with the computerSelection!';
        }
    } else {
        return "Something went wrong with the playerSelection!";
    }
    return 'Somethign went wrong!';
}

function makeDecision() {
    let pick = prompt("Choose\n1. Rock\n2. Paper\n3 Scissors")-1;
    return pickSomething(pick);
}