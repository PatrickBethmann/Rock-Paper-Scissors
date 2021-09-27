const choices = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;

// game();

const button_rock = document.querySelector("#rock");
const button_paper = document.querySelector("#paper");
const button_scissor = document.querySelector("#scissor"); 

button_rock.addEventListener('click', () => { 
    updateScore(playRound("rock", computerPlay()))
    console.log(playerScore + " " + computerScore);
});
button_paper.addEventListener('click', () => { 
    updateScore(playRound("paper", computerPlay()))
    console.log(playerScore + " " + computerScore);
});
button_scissor.addEventListener('click', () => { 
    updateScore(playRound("scissor", computerPlay()))
    console.log(playerScore + " " + computerScore);
});


// This fnctions creates a random number for the computer choice and uses "pickSomething()" to select a choice and then returns it
function computerPlay() { 
    let random = Math.floor(Math.random() * choices.length); // Generates a random number from 0 to choices.length-1 (because the last digit is not included in Math.random)
    return choices[random]; // Returns one of the choices defined in choices :D
}

// This function checks who has won
function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {

        // Player picks Rock
        if (computerSelection === 'rock') {
            return 'draw';
        } else if (computerSelection === 'paper') {
            return 'computer';
        } else if (computerSelection === 'scissor') {
            return 'player';
        } else {
            return console.log("Something went wrong");
        }

        // Player picks Paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'player';
        } else if (computerSelection === 'paper') {
            return 'draw';
        } else if (computerSelection === 'scissor') {
            return 'computer';
        } else {
            return console.log("Something went wrong");
        }

        // Player picks Scissor
    } else if (playerSelection === 'scissor') {
        if (computerSelection === 'rock') {
            return 'computer';
        } else if (computerSelection === 'paper') {
            return 'player';
        } else if (computerSelection === 'scissor') {
            return 'draw'
        } else {
            return console.log("Something went wrong");
        }
    } else {
        return console.log("Something went wrong");
    }
    return console.log("Something went wrong");
}

function game() {
    
    updateScore(playRound(makeDecision(), computerPlay()));
    

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