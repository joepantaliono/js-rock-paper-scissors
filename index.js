let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
};

let computerScore = 0;
let playerScore = 0;

function updateScore() {
    let outcome = result.textContent;
    console.log(outcome);
    
    if (outcome === 'Draw!') {
        //pass
    }
    else if (outcome === 'You win!') {
        playerScore++;
    }
    else {
        computerScore++;
    }

    document.getElementById("score").innerHTML = `Your score: ${playerScore} | Computer score: ${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose!';
    }
}

document.getElementById("rock").addEventListener("click", function() {
    let computerSelection = computerPlay();
    document.getElementById("result").innerHTML = playRound("rock", computerSelection);
    document.getElementById("player-selection").innerHTML = "Your choice: rock";
    document.getElementById("computer-selection").innerHTML = `Computer's choice: ${computerSelection}`;
    updateScore();
    resetCheck();
});

document.getElementById("paper").addEventListener("click", function() {
    let computerSelection = computerPlay();
    document.getElementById("result").innerHTML = playRound("paper", computerSelection);
    document.getElementById("player-selection").innerHTML = "Your choice: paper";
    document.getElementById("computer-selection").innerHTML = `Computer's choice: ${computerSelection}`;
    updateScore();
    resetCheck();
});

document.getElementById("scissors").addEventListener("click", function() {
    let computerSelection = computerPlay();
    document.getElementById("result").innerHTML = playRound("scissors", computerSelection);
    document.getElementById("player-selection").innerHTML = "Your choice: scissors";
    document.getElementById("computer-selection").innerHTML = `Computer's choice: ${computerSelection}`;
    updateScore();
    resetCheck();
});

function resetCheck() {
    if (computerScore === 10) {
        alert('Computer wins the game! Select a choice to start a new game.');
        computerScore = 0;
        playerScore = 0;
    } 
    else if (playerScore === 10) {
        alert('You win the game! Select a choice to start a new game.');
        computerScore = 0;
        playerScore = 0;
    }
}
