let choices = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose!'
    }
};

document.getElementById("rock").addEventListener("click", function() {
    let computerSelection = computerPlay();
    document.getElementById("result").innerHTML = playRound("rock", computerSelection);
    document.getElementById("player-selection").innerHTML = "Your choice: rock";
    document.getElementById("computer-selection").innerHTML = `Computer's choice: ${computerSelection}`;
});

document.getElementById("paper").addEventListener("click", function() {
    let computerSelection = computerPlay();
    document.getElementById("result").innerHTML = playRound("paper", computerSelection);
    document.getElementById("player-selection").innerHTML = "Your choice: paper";
    document.getElementById("computer-selection").innerHTML = `Computer's choice: ${computerSelection}`;
});

document.getElementById("scissors").addEventListener("click", function() {
    let computerSelection = computerPlay();
    document.getElementById("result").innerHTML = playRound("scissors", computerSelection);
    document.getElementById("player-selection").innerHTML = "Your choice: scissors";
    document.getElementById("computer-selection").innerHTML = `Computer's choice: ${computerSelection}`;
});
